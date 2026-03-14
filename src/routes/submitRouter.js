const express = require('express');
const submitRouter = express.Router();
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const {submitCode} = require('../controllers/submissionController');

submitRouter.post('/submit/:id', userAuthMiddleware, submitCode);