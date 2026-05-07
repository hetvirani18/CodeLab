const express = require('express');

const problemRouter = express.Router();
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const {createProblem, updateProblem, deleteProblem, getProblemById, getProblemByIdAdmin, getAllProblems, solvedAllProblemsByUser, submittedCode} = require('../controllers/problemController');

problemRouter.post('/create',adminAuthMiddleware, createProblem);
problemRouter.put('/update/:id', adminAuthMiddleware, updateProblem);
problemRouter.delete('/delete/:id', adminAuthMiddleware, deleteProblem);


problemRouter.get('/problem-by-id/:id', userAuthMiddleware, getProblemById);
problemRouter.get('/problem-by-id-admin/:id', adminAuthMiddleware, getProblemByIdAdmin);
problemRouter.get('/all-problems', userAuthMiddleware, getAllProblems);
problemRouter.get('/problems-solved-by-user', userAuthMiddleware, solvedAllProblemsByUser);
problemRouter.get('/submitted-codes/:pid', userAuthMiddleware, submittedCode);

module.exports = problemRouter;