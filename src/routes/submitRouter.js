const express = require('express');
const submitRouter = express.Router();
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const {submitCode, runCode, getSubmissions} = require('../controllers/submissionController');
const {runRateLimiter, submitRateLimiter} = require('../middleware/rateLimiter');

submitRouter.post('/submit/:id', userAuthMiddleware, submitRateLimiter, submitCode);
submitRouter.post('/run/:id', userAuthMiddleware, runRateLimiter, runCode);
submitRouter.get('/submissions/:id', userAuthMiddleware, getSubmissions);

module.exports = submitRouter;