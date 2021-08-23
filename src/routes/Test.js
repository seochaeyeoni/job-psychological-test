import { useRecoilValue } from 'recoil';
import { questionState } from '../atom';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import { useHistory } from 'react-router-dom';

const Test = ({ match }) => {
  const history = useHistory();
  const questionValue = useRecoilValue(questionState);
  console.log(questionValue);
  const page = Number(match.params.page);
  const progress = (100 / 6) * page;

  const radioChange = () => {};

  const nextPage = () => {
    history.push(`/test/${page + 1}`);
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
      <h1>{match.params.page}</h1>
      <ProgressBar percent={progress} />
      {questions()}
      <Button name="다음" disabled={false} onClick={nextPage} />
    </>
  );
};

export default Test;
