import { useRecoilValue } from 'recoil';
import { questionState } from '../atom';

const Test = ({match}) => {
    const questionValue = useRecoilValue(questionState);
    console.log(questionValue)
    /*
    여기서 Uncaught TypeError: questionValue.map is not a function
    에러가 뜨는데 도무지 왜 그러는지 모르겠습니다ㅠㅠ
    questionValue가 [{},{},...] 이런 형태인데 왜 안되는 걸까요...
    */
    const firstAnswers = questionValue.map(value => value.answer01)
    console.log(firstAnswers)

    return (
        <>
        <h1>{match.params.page}</h1>
        </>
    )
}

export default Test;