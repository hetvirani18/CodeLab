const express = require('express');
const authRouter = express.Router();
const {register, login, logout, getProfile, adminRegistor, deleteProfile} = require('../controllers/authController');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', userAuthMiddleware, logout);
authRouter.post('/admin/register', adminAuthMiddleware, adminRegistor);
authRouter.get('/profile', userAuthMiddleware, getProfile);
authRouter.delete('/delete-profile', userAuthMiddleware, deleteProfile);

module.exports = authRouter;