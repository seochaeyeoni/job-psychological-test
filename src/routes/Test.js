import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { questionState } from '../atom';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import { useHistory } from 'react-router-dom';

const Test = () => {
  const history = useHistory();
  const questionValue = useRecoilValue(questionState);
  const [page, setPage] = useState(1)
  const progress = (100 / 6) * page;

  const radioChange = () => {};

  const previousPage = () => {
      if (page > 1) setPage(page-1)
      else history.push('/example')
  }

  const nextPage = () => {
      if (page < 6) setPage(page+1)
      else history.push('/result')
  };

  const questions = () => {
    return (
      <>
        {questionValue.slice((page-1)*5,5*page).map((data, index) => (
          <Question
            Question={data.question}
            value1={data.answer01}
            value2={data.answer02}
            onClick={radioChange}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <ProgressBar percent={progress} />
      {questions()}
      <Button name="이전" disabled={false} onClick={previousPage} />
      <Button name="다음" disabled={false} onClick={nextPage} />
    </>
  );
};

export default Test;
