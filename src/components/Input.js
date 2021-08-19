import { useRecoilState } from 'recoil';
import userState from '../atom';

const NameInput = () => {
  const [value, setValue] = useRecoilState(userState);
  const inputChange = e => {
    const temp = { ...value };
    temp.name = e.target.value;
    setValue(temp);
  };
  return (
    <input
      class="form-control"
      type="text"
      placeholder="이름"
      aria-label="default input example"
      value={value.name}
      onChange={inputChange}
    />
  );
};

export default NameInput;
