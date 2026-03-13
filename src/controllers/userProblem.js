const {getLanguageId, submitBatch, submitToken, getJudgeError} = require('../utils/problemUtility');
const Problem = require('../models/problem');

const createProblem = async (req, res, next) => {
    try{
        const {title, description, difficulty, tags, visibleTestCases, hiddenTestCases, startCode, referenceSolution} = req.body;
        
        for(const {language, completeCode} of referenceSolution){
            //source_code
            //language_id
            //stdin
            //expected_output

            const languageId = getLanguageId(language);
            if(!languageId) return res.status(400).send("Unsupported language");


            const submissions = visibleTestCases.map((testCases) => ({
                source_code: completeCode,
                language_id: languageId,
                stdin: testCases.input,
                expected_output: testCases.output
            }));

            const submitResult = await submitBatch(submissions);
            
            //just map array of only tokens
            const resultTokens = submitResult.map((value) => value.token);

            const testResult = await submitToken(resultTokens);

            for(const test of testResult){
                if(test.status_id !== 3){ 
                    console.log("Judge0 Failure:", {
                        status: test.status.description,
                        stdout: test.stdout,
                        expected: test.expected_output,
                        compile_output: test.compile_output
                    });
                    const errorMessage = test.stderr || getJudgeError(test.status_id); 
                    return res.status(400).send("Erro: " + errorMessage); 
                }
            }
        }

        //we can store this problem in our db
        await Problem.create({
            ...req.body,
            problemCreator: req.result._id
        })

        res.status(201).send("Problem saved successfully");

    }
    catch(err) {
        res.status(500).send("Error: "+err.message);
    }
}

module.exports = createProblem;