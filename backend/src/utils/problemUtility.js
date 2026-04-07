const axios = require('axios');

const JUDGE0_URL = process.env.JUDGE0_URL;

// Encodes plain text to Base64
const encode = (str) => {
    if (!str) return "";
    return Buffer.from(str).toString('base64');
};

// Decodes Base64 back to plain text
const decode = (str) => {
    if (!str) return "";
    return Buffer.from(str, 'base64').toString('utf-8');
};


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
            base64_encoded: 'true'
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
            base64_encoded: 'true',
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

const testCode = async (testCases, solution) => {
    for(const {language, completeCode} of solution){
        //source_code
        //language_id
        //stdin
        //expected_output

        const languageId = getLanguageId(language);
        if(!languageId){
            let error = new Error('language unsupported');
            error.statusCode(400);
            throw error;
        }


        const submissions = testCases.map((testCases) => ({
            source_code: encode(completeCode),
            language_id: languageId,
            stdin: encode(testCases.input),
            expected_output: encode(testCases.output)
        }));

        const submitResult = await submitBatch(submissions);
        
        //just map array of only tokens
        const resultTokens = submitResult.map((value) => value.token);

        const testResult = await submitToken(resultTokens);
        console.log(testResult);

        for(const test of testResult){
            if(test.status_id !== 3){ 
                const decodedError = decode(test.stderr || test.compile_output);

                const errorMessage = decodedError || `Failure: ${test.status?.description || "Execution Error"}`;
                let error = new Error(errorMessage);
                error.statusCode = 400;
                throw error;
            }
        }
    }
}

module.exports = {getLanguageId, submitBatch, submitToken, testCode, encode, decode};