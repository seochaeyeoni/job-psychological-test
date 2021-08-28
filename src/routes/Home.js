import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import RadioButton from '../components/RadioButton';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../atom';
import { Outer, Inner } from '../styles/globalStyles';

const Home = () => {
  const history = useHistory();
  const [status, setStatus] = useState(true);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    setStatus(!user.gender || !user.name);
  }, [user.gender, user.name]);

  const validator = value => {
    const reg = /^[가-힣]{2,4}$/;
    return reg.test(value);
  };

  const checkUser = () => {
    let today = new Date();
    console.log('checkUser');
    const msg = '한글 이름 2~4자 이내로 입력해주세요';
    if (!validator(user.name)) alert(msg);
    else {
      const temp = { ...user };
      temp.createdAt = today.toLocaleString();
      setUser(temp);
      history.push('/example');
    }
  };

  const inputChange = value => {
    const temp = { ...user };
    temp.name = value;
    setUser(temp);
  };

  const radioChange = (group, value) => {
    const temp = { ...user };
    console.log(value)
    temp.gender = value;
    setUser(temp);
  };


  return (
    <Outer>
      <Inner>
        <h1>📊직업가치관검사✅</h1>
        <h5>이름</h5>
        <Input onChange={inputChange} />
        <h5>성별</h5>
        <RadioButton value="🙆‍♂️남자" group="gender" hiddenValue="남자" onChange={radioChange} />
        <RadioButton value="🙆‍♀️여자" group="gender" hiddenValue="여자" onChange={radioChange} />
        <div></div>
        <Button name="검사시작" disabled={status} onClick={checkUser} />
      </Inner>
    </Outer>
  );
};

export default Home;
