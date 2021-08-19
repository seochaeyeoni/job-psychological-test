import React, { useState } from 'react';
import Button from '../components/Button';
import NameInput from '../components/Input';
import RadioButton from '../components/RadioButton';
import { useRecoilState } from 'recoil';
import userState from '../atom';

const Home = () => {
  const [status, setStatus] = useState(true);
  // useRecoilValue 쓰니까 TypeError: Object is not a function
  const [user, setUser] = useRecoilState(userState);

  const observeChange = () => {
    console.log('observeChange');
    // 그 이전 입력값이 저장되어 있다...
    console.log(user);
    if (user.name !== '' && user.gender !== '') setStatus(false);
    else setStatus(true);
  };

  const validator = value => {
    const reg = /^[가-힣]{2,4}$/;
    return reg.test(value);
  };

  const checkUser = () => {
    let today = new Date();
    console.log('checkUser');
    const msg = '한글 이름 2~4자 이내로 입력해주세요';
    console.log(user);
    if (!validator(user.name)) alert(msg);
    else {
      const temp = { ...user };
      temp.createdAt = today.toLocaleString();
      setUser(temp);
      //example로 넘기기
    }
  };

  return (
    <>
      <h1>직업가치관검사</h1>
      <h5>이름</h5>
      <NameInput onChanged={observeChange} />
      <h5>성별</h5>
      <RadioButton value1="남자" value2="여자" onChanged={observeChange} />
      <Button name="검사시작" disabled={status} onClick={checkUser} />
    </>
  );
};

export default Home;
