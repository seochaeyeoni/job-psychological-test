import Button from '../components/Button';
import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import { wonScoreState } from '../atom';
import { interpretationNames } from '../constants';
import { Outer, Inner } from '../styles/globalStyles';

const Finish = () => {
  const wonScoreValue = useRecoilValue(wonScoreState);
  const history = useHistory();
  const gotoResult = () => {
    history.push('/result');
  };

  const orderedWonscore = () => {
    const unordered = wonScoreValue;
    console.log(unordered);
    let ordered = Object.keys(unordered).map(key => {
      return [key, unordered[key]];
    });
    ordered.sort((first, second) => {
      return second[1] - first[1];
    });
    console.log(ordered);
    return [interpretationNames[ordered[0][0] - 1], interpretationNames[ordered[1][0] - 1]];
  };

  //이 부분 갑자기 안되서, api 부분 리팩토링하고 재도전 해보기!
  const prevResult = () => {
    const [first, second] = orderedWonscore();
    return (
      <>
        <h4>
          {first}와 {second}를 중요 가치로 생각하시는군요!
        </h4>
        <h4>결과보기 버튼으로, 가치관과 관련이 높은 직업들을 탐색하세요!</h4>
      </>
    );
  };

  return (
    <Outer>
      <Inner>
        <h1>검사가 완료되었습니다!</h1>
        <h5>
          검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를
          알려주고,
        </h5>
        <h5>중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</h5>
        <Button name="결과보기" disabled={false} onClick={gotoResult} />
      </Inner>
    </Outer>
  );
};

export default Finish;
