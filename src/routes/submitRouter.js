const express = require('express');
const submitRouter = express.Router();
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const {submitCode, runCode} = require('../controllers/submissionController');

submitRouter.post('/submit/:id', userAuthMiddleware, submitCode);
submitRouter.post('/run/:id', userAuthMiddleware, runCode);

module.exports = submitRouter;