import Button from '../components/Button';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { userState, wonScoreState, jobState, majorState } from '../atom';
import { interpretationNames, educationLevelNames, majorNames } from '../constants';
import Chart from '../components/Chart';
import UserTable from '../components/UserTable';
import JobMajorTable from '../components/JobMajorTable';
import { TestOuter, Inner } from '../styles/globalStyles';

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
  const jobMajorCol = ['λΆμΌ', 'μ§μ'];
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
    <TestOuter>
      <Inner>
        <h1>πμ§μκ°μΉκ΄κ²μ¬ κ²°κ³Όνπ</h1>
        <UserTable userValue={userValue} />
        <p>
          μ§μκ°μΉκ΄μ΄λ μ§μμ μ νν  λ μν₯μ λΌμΉλ μμ λ§μ λ―Ώμκ³Ό μ λμλλ€. λ°λΌμ μ¬λ¬λΆμ
          μ§μμνκ³Ό κ΄λ ¨νμ¬ ν¬κΈ°νμ§ μλ λ¬΄κ²μ€μ¬μ μ­ν μ νλ€κ³  λ³Ό μ μμ΅λλ€.
          μ§μκ°μΉκ΄κ²μ¬λ μ¬λ¬λΆμ΄ μ§μμ μ νν  λ μλμ μΌλ‘ μ΄λ ν κ°μΉλ₯Ό μ€μνκ² μκ°νλμ§λ₯Ό
          μλ €μ€λλ€. λν λ³ΈμΈμ΄ κ°μ₯ μ€μνκ² μκ°νλ κ°μΉλ₯Ό μΆ©μ‘±μμΌμ€ μ μλ μ§μμ λν΄
          μκ°ν΄ λ³Ό κΈ°νλ₯Ό μ κ³΅ν©λλ€.
        </p>
        <h3>μ§μκ°μΉκ΄ κ²°κ³Ό</h3>
        <Chart labels={interpretationNames} datas={Object.values(wonScoreValue).map(Number)} />
        <h3 style={{marginTop: "20px"}}>κ°μΉκ΄κ³Ό κ΄λ ¨μ΄ λμ μ§μ</h3>
        <h4 style={{backgroundColor: "ivory"}}>μ’μ¬μ νκ·  νλ ₯λ³</h4>
        <JobMajorTable col={jobMajorCol} values={parseJobMajor(jobValue, educationLevelNames)} />
        <h4 style={{backgroundColor: "ivory"}}>μ’μ¬μ νκ·  μ κ³΅λ³</h4>
        <JobMajorTable col={jobMajorCol} values={parseJobMajor(majorValue, majorNames)} />
        <Button name="λ€μ κ²μ¬νκΈ°" disabled={false} onClick={gotoHome} />
      </Inner>
    </TestOuter>
  );
};

export default Finish;
