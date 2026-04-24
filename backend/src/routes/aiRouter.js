const express = require('express');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const {chatWithAI} = require('../controllers/chatWithAI');

const aiRouter = express.Router();

aiRouter.post('/chat', userAuthMiddleware, chatWithAI);

module.exports = aiRouter;