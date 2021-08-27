import Button from '../components/Button';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { userState, wonScoreState, jobState, majorState } from '../atom';
import { interpretationNames, educationLevelNames, majorNames } from '../constants';
import Chart from '../components/Chart';
import UserTable from '../components/UserTable';
import JobMajorTable from '../components/JobMajorTable';

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
  const jobMajorCol = ['분야', '직업']
  const gotoHome = () => {
    resetUser();
    resetWonScore();
    resetJob();
    resetMajor();
    console.log(userValue, wonScoreValue, jobValue, majorValue);
    history.push('/');
  };

  const parseJobMajor = (value, names) => {
    let dict = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] };
    let row = [];
    let data = [];
    value.forEach(elem => {
      let temp = dict[elem[2]];
      temp.push(elem.slice(0, 2));
      dict[elem[2]] = temp;
    });
    for (const [key, value] of Object.entries(dict)) {
      console.log(key, value);
      if (value.length !== 0) {
        row.push(names[key]);
        data.push(value);
      }
    }
    console.log(row);
    console.log(data);
    return [row, data];
  };

  return (
    <>
      <h1>직업가치관검사 결과표</h1>
      <UserTable userValue={userValue} />
      <p>
        직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다. 따라서 여러분의
        직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고 볼 수 있습니다. 직업가치관검사는
        여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한
        본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를
        제공합니다.
      </p>
      <h3>직업가치관 결과</h3>
      <Chart labels={interpretationNames} datas={Object.values(wonScoreValue).map(Number)} />
      <h3>가치관과 관련이 높은 직업</h3>
      <h4>종사자 평균 학력별</h4>
      <JobMajorTable col={jobMajorCol} values={parseJobMajor(jobValue, educationLevelNames)}/>
      <h4>종사자 평균 전공별</h4>
      <JobMajorTable col={jobMajorCol} values={parseJobMajor(majorValue, majorNames)}/>
      <Button name="다시 검사하기" disabled={false} onClick={gotoHome} />
    </>
  );
};

export default Finish;
