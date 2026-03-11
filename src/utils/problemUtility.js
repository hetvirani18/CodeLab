const axios = require('axios');

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
        url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
        params: {
            base64_encoded: 'true'
        },
        headers: {
            'x-rapidapi-key': '7833466993msh54dc0e0e8456c67p1770a3jsn05a8af5fed05',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
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
        }
    }

    return await fetchData();
}

module.exports = {getLanguageId, submitBatch};