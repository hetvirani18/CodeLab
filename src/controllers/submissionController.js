const Problem = require('../models/problem');
const Submission = require('../models/submission');
const {getLanguageId, getJudgeError} = require('../utils/problemUtility');

const submitCode = async (req, res) => {
    try{
        const userId = req.result._id;
        const problemId = req.params.id;

        const {code, language} = req.body;
        if(!code || !language) return res.status(400).send("Some field missing");

        const problem = await Problem.findById(problemId).select('hiddenTestCases');
        if(!problem) return res.status(404).send("Probelm does not exists");

        //first store code with pending status
        const submittedResult = await Submission.create({
            userId,
            problemId,
            code,
            language,
            testCasesTotal: problem.hiddenTestCases.length,
        });

        //send code to judge0
        const languageId = getLanguageId(language);

        if(!languageId) return res.staus(400).send('laguage is not supported');

        const submissions = problem.hiddenTestCases.map((testCases) => ({
            source_code: code,
            language_id: languageId,
            stdin: testCases.input,
            expected_output: testCases.output
        }));

        const submitResult = await submitBatch(submissions);
                
        //just map array of only tokens
        const resultTokens = submitResult.map((value) => value.token);

        const testResult = await submitToken(resultTokens);

        //update submittedResult
        let testCasesPassed = 0;
        let runtime = 0;
        let memory = 0;
        let status = 'accepted';
        let errorMessage = "";

        for(const test of testResult){
            if(test.status_id==3){
                testCasesPassed++;
                runtime = Math.max(runtime, parseFloat(test.time));
                memory = Math.max(memory, test.memory);
            }
            else{
                const statusMap = { 4: 'wrong', 5: 'tle', 12: 'mle' };
                status = statusMap[test.status_id] || 'error';

                submittedResult.failDetails = {
                    input: test.stdin,         
                    expectedOutput: test.expected_output, 
                    userOutput: test.stdout,        
                    caseNumber: testCasesPassed+1                
                };

                submittedResult.errorMessage = test.stderr || test.compile_output || "Execution Error";
                break;
            }
        }

        submittedResult.status = status;
        submittedResult.runtime = runtime*1000;
        submittedResult.memory = memory;
        submittedResult.testCasesPassed = testCasesPassed;

        await submittedResult.save();

        res.status(201).send(submittedResult);
    }
    catch(err){
        res.status(500).send("Error: "+err.message);
    }
}


module.expoers = {submitCode};

const temp = {
    source_code: 'import java.util.*;\n' +
      '\n' +
      'public class Main {\n' +
      '    public static void main(String[] args) {\n' +
      '        Scanner sc = new Scanner(System.in);\n' +
      '        if (sc.hasNext()) {\n' +
      '            String s = sc.next();\n' +
      '            String rev = new StringBuilder(s).reverse().toString();\n' +
      '            System.out.print(s.equals(rev) ? "true" : "false");\n' +
      '        }\n' +
      '    }\n' +
      '}',
    language_id: 62,
    stdin: 'hello',
    expected_output: 'false',
    stdout: 'false',
    status_id: 3,
    created_at: '2026-03-14T18:25:08.715Z',
    finished_at: '2026-03-14T18:25:11.307Z',
    time: '0.136',
    memory: 12076,
    stderr: null,
    token: '3cb5db6d-f8ee-409f-942a-cfc2900f57f1',
    number_of_runs: 1
}