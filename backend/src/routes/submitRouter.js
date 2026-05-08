const express = require('express');
const submitRouter = express.Router();
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const {submitCode, runCode, getSubmissions, getUserSubmissions} = require('../controllers/submissionController');
const {runRateLimiter, submitRateLimiter} = require('../middleware/rateLimiter');

submitRouter.post('/submit/:id', userAuthMiddleware, submitRateLimiter, submitCode);
submitRouter.post('/run/:id', userAuthMiddleware, runRateLimiter, runCode);
submitRouter.get('/user-submissions', userAuthMiddleware, getUserSubmissions);
submitRouter.get('/submissions/:id', userAuthMiddleware, getSubmissions);

module.exports = submitRouter;