const User = require('../models/user');
const validate = require('../utils/validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const redisClient = require('../config/redis');
const Submission = require('../models/submission');
const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');

const register = async (req, res) => {
    try{
        //validate the data
        validate(req.body);
        
        const {password, emailId} = req.body;
        req.body.password = await bcrypt.hash(password, 10);
        req.body.role = "user";   //no one can become admin in this path
        const user = await User.create(req.body);

        const token = jwt.sign({_id: user._id, emailId: emailId, role: 'user'}, process.env.JWT_KEY, {expiresIn: '24h'});
        res.cookie ('token', token, {maxAge: 86400*1000});
        res.status(200).json({
            message: 'User Registor Succesfully',
            user: {
                _id: user._id,
                firstName: user.firstName,
                emailId: user.emailId,
                role: user.role
            }
        });
    }
    catch(err){
        res.status(400).json({message: "Error: "+ err.message});
    }
}

const login = async (req, res) => {
    try{
        const {emailId, password} = req.body;

        if(!emailId || !password) throw new Error("Invalid Credentials");

        const user = await User.findOne({emailId});
        //if user with email dont exists
        if (!user)  throw new Error("Invalid Credentials");

        
        const match = await bcrypt.compare(password, user.password);

        if(!match) throw new Error("Invalid Credentials");

        const token = jwt.sign({_id: user._id, emailId: emailId, role: user.role}, process.env.JWT_KEY, {expiresIn: '24h'});
        res.cookie ('token', token, {maxAge: 86400*1000});

        res.status(201).json({
            message: "Login Successful",
            user: {
                _id: user._id,
                firstName: user.firstName,
                emailId: user.emailId,
                role: user.role
            }
        });
        
    }
    catch(err){
        res.status(401).json({message: "Error: "+ err.message});
    }
}
 
const logout = async (req, res) => {
    try{
        //add token to redis blocklist with expiredate
        const {token} = req.cookies;
        const payload = jwt.decode(token);

        await redisClient.set(`token:${token}`, "blocked");
        await redisClient.expireAt(`token:${token}`, payload.exp);
        
        //clear cookie
        res.cookie('token', null, {expires: new Date(0)});

        res.json({message: "Logged Out Successfully"});
    }
    catch(err){
        res.status(503).json({message: "Error: "+ err.message});
    }
}

const adminRegistor = async (req, res) => {
    try{
        //validate the data
        validate(req.body);
        
        const {password, emailId} = req.body;
        req.body.password = await bcrypt.hash(password, 10);
        const user = await User.create(req.body);

        res.status(201).json({
            message: 'User Registor Succesfully',
            user: {
                _id: user._id,
                firstName: user.firstName,
                emailId: user.emailId,
                role: user.role

            }
        });
    }
    catch(err){
        res.status(400).json({message: "Error: "+ err.message});
    }
}

const getProfile = async (req, res) => {
    const user = req.result;
    const ans = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId,
        problemSolved: user.problemSolved
    }
    res.status(200).json(ans);
}

const deleteProfile = async(req, res) => {
    try{
        const userId = req.result._id;
        await User.findByIdAndDelete(userId);

        res.status(200).json({message: "Profile Deleted successfully."});
    }
    catch(err){
        res.status(500).json({message: "Error: "+err.message});
    }
}

const updateProfile = async (req, res) => {
    try{
        const userId = req.result._id;
        const user = req.result;
        const {profilePic, firstName, lastName} = req.body;
        if(!profilePic && !firstName && !lastName) return res.status(400).json({message: "At least one field is required to update"});
        
        const updateData = {};
        
        if (profilePic) {
            if (user.profilePic?.public_id) {
                await cloudinary.uploader.destroy(user.profilePic.public_id);
            }

            const uploadResponse = await cloudinary.uploader.upload(profilePic, {
                folder: "profilePics",
                public_id: userId,
            });

            updateData.profilePic = {
                url: uploadResponse.secure_url,
                public_id: uploadResponse.public_id,
            };
        }

        if(firstName) updateData.firstName = firstName;
        if(lastName) updateData.lastName = lastName;
        const updatedUser = await User.findByIdAndUpdate(
            userId, 
            updateData, 
            {returnDocument: 'after'}
        );

        res.status(200).json({updatedUser});

    }
    catch(err){
        res.status(500).json({message: "Error: "+err.message});
    }
}

function calculateStreak(heatmap) {
  const dates = Object.keys(heatmap).sort();
  let streak = 0;

  let current = new Date();
  current.setHours(0, 0, 0, 0);

  for (let i = dates.length - 1; i >= 0; i--) {
    const d = new Date(dates[i]);
    d.setHours(0, 0, 0, 0);

    const diff = Math.floor((current - d) / (1000 * 60 * 60 * 24));

    if (diff === 0 || diff === 1) {
      streak++;
      current = d;
    } else if (diff > 1) {
      break;
    }
  }

  return streak;
}

const getUserActivity = async (req, res) => {
  try {
    const userId = req.result._id;

    const data = await Submission.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
          status: "accepted"
        }
      },

      // unique problem per day
      {
        $group: {
          _id: {
            problemId: "$problemId",
            date: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$createdAt"
              }
            }
          }
        }
      },

      // count per day
      {
        $group: {
          _id: "$_id.date",
          count: { $sum: 1 }
        }
      },

      { $sort: { _id: 1 } }
    ]);

    // format
    const heatmap = {};
    data.forEach(d => {
      heatmap[d._id] = d.count;
    });

    // streak
    const streak = calculateStreak(heatmap);

    const today = new Date().toLocaleDateString('en-CA');

    const todaySolved = !!heatmap[today];
    console.log("activity: ", heatmap, streak, todaySolved);

    res.json({
      heatmap,
      streak,
      todaySolved
    });

  } catch (err) {
    console.log("Error in getUserActivity: ", err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {register, login, logout, getProfile, adminRegistor, deleteProfile, updateProfile, getUserActivity};