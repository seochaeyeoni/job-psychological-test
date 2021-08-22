import { useRecoilValue } from 'recoil';
import { questionState } from '../atom';

const Test = ({match}) => {
    const questionValue = useRecoilValue(questionState);
    console.log(questionValue)

    return (
        <>
        <h1>{match.params.page}</h1>
        </>
    )
}

export default Test;