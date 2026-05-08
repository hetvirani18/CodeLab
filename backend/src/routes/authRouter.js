const express = require('express');
const authRouter = express.Router();
const {register, login, logout, getProfile, adminRegistor, deleteProfile, updateProfile, getUserActivity} = require('../controllers/authController');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', userAuthMiddleware, logout);
authRouter.post('/admin/register', adminAuthMiddleware, adminRegistor);
authRouter.get('/profile', userAuthMiddleware, getProfile);
authRouter.delete('/delete-profile', userAuthMiddleware, deleteProfile);
authRouter.post('/update-profile', userAuthMiddleware, updateProfile);
authRouter.get('/activity', userAuthMiddleware, getUserActivity);
authRouter.get('/check', userAuthMiddleware, (req, res) => {
    res.status(200).json({
        message: "Token is valid",
        user: {
            _id: req.result._id,
            firstName: req.result.firstName,
            lastName: req.result.lastName,
            emailId: req.result.emailId,
            role: req.result.role,
            profilePic: req.result.profilePic
        }
    })
})

module.exports = authRouter;