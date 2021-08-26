import Button from '../components/Button';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { userState, wonScoreState, jobState, majorState } from '../atom';
import { interpretationNames, educationLevelNames, majorNames } from '../constants';

const Finish = () => {
  const userValue = useRecoilValue(userState);
  const wonScoreValue = useRecoilValue(wonScoreState);
  const jobValue = useRecoilValue(jobState);
  const majorValue = useRecoilValue(majorState);
  const resetUser = useResetRecoilState(userState);
  const resetWonScore = useResetRecoilState(userState);
  const resetJob = useResetRecoilState(userState);
  const resetMajor = useResetRecoilState(userState);
  const history = useHistory();
  const gotoHome = () => {
    resetUser()
    resetWonScore()
    resetJob()
    resetMajor()
    console.log(userValue, wonScoreValue, jobValue, majorValue)
    history.push('/');
  };

  /* 
  - Chart Component
  Chart.js Bar Chart
  ex)
  label = ['자율성', '창의성', '보수']
  data = ['5', '5', '4']
  - Table Component
  ex1) only col
  col = ['이름', '성별', '검사일']
  data = ['앨리스', '여', '2021.08.25']
  ex2) col and row
  col = ['분야', '직업']
  row = ['고졸', '대졸', '대학원졸']
  data = [['a', 'b'], ['c'], ['d', 'e', 'f']]

  interpretationNames는 그대로 label로 넘기기
  educationLevelNames는 1부터 매칭
  majorNames는 0부터 매칭
  */

  return (
    <>
      <h1>직업가치관검사 결과표</h1>
      <p>
        직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다. 따라서 여러분의
        직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고 볼 수 있습니다. 직업가치관검사는
        여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한
        본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를
        제공합니다.
      </p>
      <h3>직업가치관 결과</h3>
      <h3>가치관과 관련이 높은 직업</h3>
      <h2>종사자 평균 학력별</h2>
      <h2>종사자 평균 전공별</h2>
      <Button name="다시 검사하기" disabled={false} onClick={gotoHome} />
    </>
  );
};

export default Finish;
