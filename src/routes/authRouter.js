const express = require('express');
const authRouter = express.Router();
const {register, login, logout, getProfile, adminRegistor} = require('../controllers/authController');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', userAuthMiddleware, logout);
authRouter.post('/admin/register', adminAuthMiddleware, adminRegistor);
authRouter.get('/getprofile', userAuthMiddleware, getProfile);

module.exports = authRouter;