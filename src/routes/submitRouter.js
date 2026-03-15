const express = require('express');
const submitRouter = express.Router();
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const {submitCode, runCode, getSubmissions} = require('../controllers/submissionController');

submitRouter.post('/submit/:id', userAuthMiddleware, submitCode);
submitRouter.post('/run/:id', userAuthMiddleware, runCode);
submitRouter.get('/submissions/:id', userAuthMiddleware, getSubmissions);

module.exports = submitRouter;