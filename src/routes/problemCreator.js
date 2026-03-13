const express = require('express');

const problemRouter = express.Router();
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const {createProblem, updateProblem, deleteProblem, getProblemById, getAllProblems, solvedAllProblemsByUser} = require('../controllers/userProblem');

problemRouter.post('/create',adminAuthMiddleware, createProblem);
problemRouter.patch('/update/:id', adminAuthMiddleware, updateProblem);
problemRouter.delete('/delete/:id', adminAuthMiddleware, deleteProblem);


problemRouter.get('/problem-by-id/:id', userAuthMiddleware, getProblemById);
problemRouter.get('/all-problems', userAuthMiddleware, getAllProblems);
problemRouter.get('/problems-solved-by-user', userAuthMiddleware, solvedAllProblemsByUser);

module.exports = problemRouter;