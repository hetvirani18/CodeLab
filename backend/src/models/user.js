    const mongoose = require('mongoose');
    const {Schema} = require('mongoose');

    const userSchema = new Schema({
        firstName:{
            type: String,
            required: true,
            minLength: 3,
            maxLength: 20,
        },
        lastName: {
            type: String,
            minLength: 3,
            maxLength: 20,
        },
        emailId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            immutable: true,
        },
        age: {
            type: Number,
            min: 6,
            max: 80,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        problemSolved: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'problem'
            }],
            default: []
        },
        password: {
            type: String,
            required: true,
        },
        profilePic: {
            url: {
                type: String,
                default: null
            },
            public_id: {
                type: String,
                default: null
            }
        }

    },{timestamps: true});

    userSchema.post('findOneAndDelete', async function (user){
        if(user) await mongoose.model('submission').deleteMany({userId: user._id});
    })

    const User = mongoose.model('user', userSchema);
    module.exports = User;