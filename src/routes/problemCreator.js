const express = require('express');
const problemRouter = express.Router();
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');

problemRouter.post('/create',adminAuthMiddleware, createProblem);
problemRouter.patch('/:id', adminAuthMiddleware, updateProblem);
problemRouter.delete('/:id', adminAuthMiddleware, deleteProblem);


problemRouter.get('/:id', getProblemById);
problemRouter.get('/', getAllProblems);
problemRouter.get('/user', solvedAllProblemsByUser);