import axios from 'axios';

const apiKey = '1a73b7811fcb787af6e72020f85b4c4a'
const BASE_URL = 'https://www.career.go.kr/inspct/openapi/test';

const api = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

export const getQuestions = async () => {
    const res = await api.get('/questions', {
        params: { apikey: apiKey, q: 6 }
    });
    try {
        console.log(typeof(res.data.RESULT))
        return parseQuestions(res.data.RESULT);
    } catch {
        return Error(res.ERROR_REASON);
    }
}

export const parseQuestions = (result) => {
    return result.map((elem) => ({
        question: elem.question,
        answer01: elem.answer01,
        answer02: elem.answer02,
        answerScore01: elem.answerScore01,
        answerScore02: elem.answerScore02
    }))
}

