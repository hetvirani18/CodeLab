const axios = require('axios');

const JUDGE0_URL = process.env.JUDGE0_URL;

const getLanguageId = (lang) => {
    const language = {
        "c++": 54,
        "java": 62,
        "javascript": 63,
    }

    return language[lang.toLowerCase()];
}

const submitBatch = async (submissions) => {

    const options = {
        method: 'POST',
        url: `${JUDGE0_URL}/submissions/batch`,
        params: {
            base64_encoded: 'false'
        },
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            submissions
        }
    };

    async function fetchData() {
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return await fetchData();
}

const waiting = async (timer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, timer);
    });
}

const submitToken = async(resultTokens) => {

    const options = {
        method: 'GET',
        url: `${JUDGE0_URL}/submissions/batch`,
        params: {
            tokens: resultTokens.join(","), 
            base64_encoded: 'false',
            fields: '*'
        },
    };

    const MAX_RETRIES = 15;
    let retries = 0;

    while(retries < MAX_RETRIES){
        try{
            const response = await axios.request(options);
            const result = response.data;

            const done = result.submissions.every((r) => r.status_id > 2);

            if(done) return result.submissions;

            await waiting(1000);
            retries++;

        }
        catch(err){
            console.error(err);
            break;
        }
    }
    throw new Error("Judge0 polling timeout");

}

const getJudgeError = (statusId) => {
    const errors = {
        4: "Wrong Answer",
        5: "Time Limit Exceeded",
        6: "Compilation Error",
        7: "Runtime Error (Segmentation Fault)",
        8: "Runtime Error",
        9: "Runtime Error",
        10: "Runtime Error (Program Aborted)",
        11: "Runtime Error",
        12: "Memory Limit Exceeded"
    };

    return errors[statusId] || "Execution Error";
};

const testCode = async (testCases, solution) => {
    for(const {language, completeCode} of solution){
        //source_code
        //language_id
        //stdin
        //expected_output

        const languageId = getLanguageId(language);
        if(!languageId){
            let error = new Error('laguage unsopported');
            error.statusCode(400);
            throw error;
        }


        const submissions = testCases.map((testCases) => ({
            source_code: completeCode,
            language_id: languageId,
            stdin: testCases.input,
            expected_output: testCases.output
        }));

        const submitResult = await submitBatch(submissions);
        
        //just map array of only tokens
        const resultTokens = submitResult.map((value) => value.token);

        const testResult = await submitToken(resultTokens);
        console.log(testResult);

        for(const test of testResult){
            if(test.status_id !== 3){ 
                console.log("Judge0 Failure:", {
                    status: test.status.description,
                    stdout: test.stdout,
                    expected: test.expected_output,
                    compile_output: test.compile_output
                });
                const errorMessage = test.stderr || getJudgeError(test.status_id); 
                let error = new Error(errorMessage);
                error.statusCode = 400;
                throw error;
            }
        }
    }
}

module.exports = {getLanguageId, submitBatch, submitToken, getJudgeError, testCode};