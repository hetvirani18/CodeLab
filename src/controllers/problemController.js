const {getLanguageId, submitBatch, submitToken, getJudgeError, testCode} = require('../utils/problemUtility');
const Problem = require('../models/problem');

const createProblem = async (req, res) => {
    try{
        const {title, description, difficulty, tags, visibleTestCases, hiddenTestCases, startCode, referenceSolution} = req.body;
        
        await testCode(visibleTestCases, referenceSolution);

        //we can store this problem in our db
        await Problem.create({
            ...req.body,
            problemCreator: req.result._id
        })

        res.status(201).send("Problem saved successfully");

    }
    catch(err) {
        if(err.statusCode) res.status(err.statusCode).send("Error: "+err.message);

        res.status(500).end("Error: "+err.message);
    }
}

const updateProblem = async (req, res) => {
    const {id} = req.params;
    const {visibleTestCases, referenceSolution} = req.body;
    
    try{   
        
        if(!id){
            res.status(400).send("Error: Missing ID");
            return;
        }

        const DsaProbelm =  await Problem.findById(id);

        if(!DsaProbelm) {
            res.status(404).send("Error: Problem is missing");
            return;
        }
        
        await testCode(visibleTestCases, referenceSolution);

        const newProblem = await Problem.findByIdAndUpdate(id, {...req.body}, {runValidators: true, new: true});

        res.status(200).send(`Problem updated successfullt ${newProblem.title}`);
   
    }
    catch(err){
        if(err.statusCode) res.status(err.statusCode).send("Error: "+err.message);

        res.status(500).end("Error: "+err.message);
    }
}

const deleteProblem = async (req, res) => {
    const {id} = req.params;
    try{
        if(!id) return res.status(400).send("Error: ID Missing");

        const deletedProblem = await Problem.findByIdAndDelete(id);

        if(!deletedProblem) return res.status(404).send("Problem is missing");
        
        res.status(200).send(`Successfully deleted ${deletedProblem.title}`);
    }
    catch(err){
        res.status(500).send("Error: "+ err.message);
    }
}

const getProblemById = async (req, res) => {
    const {id} = req.params;

    try{
        if(!id) return res.status(400).send("Error: ID Missing");

        const getProblem = await Problem.findById(id).select('title description difficulty tags visibleTestCases startCode referenceSolution ');

        if(!getProblem) return res.status(404).send("Problem is missing");
        res.status(200).send(getProblem);
    }
    catch(err){
        res.status(500).send("Error: "+ err.message);
    }
} 

const getAllProblems = async (req, res) => {
    try{
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = 10;
        const skipValue = (page - 1) * limit;
        const problems = await Problem.find({}).skip(skipValue).limit(limit).select("title difficulty tags");
        const totalProblems = await Problem.countDocuments();
        res.status(200).json({
            totalProblems,
            totalPages: Math.ceil(totalProblems / limit),
            currentPage: page,
            problems
        });
    }
    catch(err){
        res.status(500).send("Error: "+ err.message);
    }
}

const solvedAllProblemsByUser = async (req, res) => {

}

module.exports = {createProblem, updateProblem, deleteProblem, getProblemById, getAllProblems, solvedAllProblemsByUser};