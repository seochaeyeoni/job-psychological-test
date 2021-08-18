import { useState } from 'react';

const useInput = (initialValue, validator, msg) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    } else alert(msg);
  };
  return { props: { value, onChange }, utils: { setValue } };
};

const NameInput = () => {
  const msg = '한글 이름 2~4자 이내 또는 영문 이름 2~10자 이내로 입력해주세요';
  const validator = value => {
    const reg = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
    return reg.test(value);
  };
  const name = useInput('', validator, msg);
  return (
    <input
      class="form-control"
      type="text"
      placeholder="이름"
      {...name.props}
      aria-label="default input example"
    />
  );
};

export default NameInput;
