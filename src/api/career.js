import axios from 'axios';

const apiKey = '1a73b7811fcb787af6e72020f85b4c4a';
const BASE_URL = 'https://www.career.go.kr/inspct/openapi/test';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const getQuestions = async () => {
  const res = await api.get('/questions', {
    params: { apikey: apiKey, q: 6 },
  });
  try {
    return parseQuestions(res.data.RESULT);
  } catch {
    return Error(res.ERROR_REASON);
  }
};

const parseQuestions = result => {
  return result.map(elem => ({
    question: elem.question,
    answer01: elem.answer01,
    answer02: elem.answer02,
    answerScore01: elem.answerScore01,
    answerScore02: elem.answerScore02,
  }));
};

export const getResult = async (body, storeWonscores, storeJobs, storeMajors) => {
  postReport(body).then(url =>
    getWonScore(url).then(values => {
      storeWonscores(values[0]);
      getAverageJobs(values[1], values[2]).then(jobs => {
        storeJobs(jobs);
      });
      getAverageMajors(values[1], values[2]).then(majors => {
        storeMajors(majors);
      });
    }),
  );
};

const postReport = async data => {
  const res = await api.post('/report', JSON.stringify({ apikey: apiKey, ...data }));
  try {
    return res.data.RESULT.url;
  } catch {
    return Error(res.ERROR_REASON);
  }
};

const getWonScore = async url => {
  try {
    const res = await axios
      .create({
        headers: { 'Content-Type': 'application/json' },
      })
      .get(url.replace('web', 'api').replace('/value', ''));
    return parseWonScore(res.data.result.wonScore);
  } catch (e) {
    console.log(e);
    return Error(e);
  }
};

const parseWonScore = result => {
  const unordered = {};
  result.split(' ').forEach((value, index) => {
    unordered[index + 1] = value.split('=').slice(-1)[0];
  });
  let ordered = Object.keys(unordered).map(key => {
    return [key, unordered[key]];
  });
  ordered.sort((first, second) => {
    return second[1] - first[1];
  });
  return [unordered, ordered[0][0], ordered[1][0]];
};

const getAverageJobs = async (result1, result2) => {
  try {
    const res = await axios
      .create({
        headers: { 'Content-Type': 'application/json' },
      })
      .get('https://www.career.go.kr/inspct/api/psycho/value/jobs', {
        params: { no1: result1, no2: result2 },
      });
    return res.data;
  } catch (e) {
    return Error(e);
  }
};

const getAverageMajors = async (result1, result2) => {
  try {
    const res = await axios
      .create({
        headers: { 'Content-Type': 'application/json' },
      })
      .get('https://www.career.go.kr/inspct/api/psycho/value/majors', {
        params: { no1: result1, no2: result2 },
      });
    return res.data;
  } catch (e) {
    return Error(e);
  }
};
