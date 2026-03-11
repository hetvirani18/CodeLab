const {getLanguageId, submitBatch} = require('../utils/problemUtility');

const createProblem = async (req, res, next) => {
    try{
        const {title, description, difficulty, tags, visibleTestCases, hiddenTestCases, startCode, referenceSolution, problemCreator} = req.body;
        
        for(const {language, completeCode} of referenceSolution){
            //source_code
            //laguage_id
            //stdin
            //expected_output

            const languageId = getLanguageId(language);

            const submissions = visibleTestCases.map(({input, output}) => ({
                source_code: completeCode,
                laguage_id: languageId,
                stdin: input,
                expected_output: output
            }));

            const submitResult = await submitBatch(submissions);

        }
    }
    catch(err) {
        
    }
}