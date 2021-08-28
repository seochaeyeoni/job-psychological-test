import React, { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { questionState } from '../atom';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import { useHistory } from 'react-router-dom';
import { getResult } from '../api/career';
import { wonScoreState, jobState, majorState } from '../atom';
import { TestOuter, Inner } from '../styles/globalStyles';

const Test = () => {
  const history = useHistory();
  const questionValue = useRecoilValue(questionState);
  const [, setWonScore] = useRecoilState(wonScoreState);
  const [, setJob] = useRecoilState(jobState);
  const [, setMajor] = useRecoilState(majorState);
  const [answerList, setAnswerList] = useState(new Array(28).fill(0));
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(true);
  const [progress, setProgress] = useState(0);
  //const progress = parseInt((100 / 6) * page);

  useEffect(() => {
    setStatus(answerList.slice((page - 1) * 5, 5 * page).includes(0));
  }, [answerList, page]);

  const radioChange = (index, answer) => {
    let newAnswerList = [...answerList];
    // eslint-disable-next-line no-self-assign
    newAnswerList = newAnswerList.map((c, i) => (i === index ? (c = answer) : (c = c)));
    setAnswerList(newAnswerList);
    setProgress(parseInt((newAnswerList.filter(elem => 0 !== elem).length * 100) / 28));
  };

  const previousPage = () => {
    if (page > 1) setPage(page - 1);
    else history.push('/example');
  };

  const nextPage = () => {
    if (page < 6) {
      setPage(page + 1);
    } else getReport();
  };

  const getReport = () => {
    // api로 post 해서 recoil에 저장하고
    // result로 넘기기
    const answers = answerList.map((value, index) => `B${index + 1}=${value}`).join(' ');
    const body = {
      qestrnSeq: '6',
      trgetSe: '1002008',
      name: '',
      gender: '',
      startDtm: 0,
      answers,
    };
    getResult(body, storeWonscores, storeJobs, storeMajors, gotoFinish);
  };

  const gotoFinish = () => {
    history.push('/finish');
  }

  const storeWonscores = wonScores => {
    setWonScore(wonScores);
  };

  const storeJobs = jobs => {
    setJob(jobs);
  };

  const storeMajors = majors => {
    setMajor(majors);
  };

  const questions = () => {
    return (
      <>
        {questionValue.slice((page - 1) * 5, 5 * page).map((data, index) => (
          <Question
            key={index + 5 * (page - 1)}
            Question={data.question}
            value1={data.answer01}
            value2={data.answer02}
            hiddenValue1={data.answerScore01}
            hiddenValue2={data.answerScore02}
            group={index + 5 * (page - 1)}
            checked={answerList[index + 5 * (page - 1)]}
            onClick={radioChange}
          />
        ))}
      </>
    );
  };

  return (
    <TestOuter>
      <Inner>
        <ProgressBar percent={progress} />
        {questions()}
        <Button name="이전" disabled={false} onClick={previousPage} />
        <Button name="다음" disabled={status} onClick={nextPage} />
      </Inner>
    </TestOuter>
  );
};

export default Test;
