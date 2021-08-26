import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    name: '',
    gender: '',
    createdAt: '',
  },
});

export const questionState = atom({
  key: 'questionState',
  default: [
    {
      question: '',
      answer01: '',
      answer02: '',
      answerScore01: '',
      answerScore02: '',
    },
  ],
});

export const wonScoreState = atom({
  key: 'wonScoreState',
  default: {},
});

export const jobState = atom({
  key: 'jobState',
  default: [],
});

export const majorState = atom({
  key: 'majorState',
  default: [],
});
