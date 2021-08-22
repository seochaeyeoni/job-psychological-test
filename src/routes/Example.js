import React, { useState } from 'react';
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { questionState } from '../atom'
import { getQuestions } from '../api/career';

const Example = () => {
    const history = useHistory();
    const [status, setStatus] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [question, setQuestion] = useRecoilState(questionState);
    const radioChange = () => {
        setStatus(false)
      };

    const startTest = () => {
        // api로 get 해서 recoil에 저장하고
        // test로 넘기기
        setQuestion(getQuestions())
        history.push('/test/1');
    }

  return (
    <>
      <ProgressBar percent={0} />
      <h5>직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.</h5>
      <Question
        Question="두개 가치 중에 자신에게 더 중요한 가치를 선택하세요."
        value1="능력발휘"
        value2="자율성"
        onClick={radioChange}
      />
      <Button name="검사시작" disabled={status} onClick={startTest}/>
    </>
  );
};

export default Example;