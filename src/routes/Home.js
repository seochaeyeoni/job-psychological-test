import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import RadioButton from '../components/RadioButton';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../atom';
import styled from 'styled-components';

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

  const radioChange = value => {
    const temp = { ...user };
    temp.gender = value;
    setUser(temp);
  };

  const Outer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
    background-color: aliceblue;
  `;

  const Inner = styled.div`
    text-align: center;
    width: 60%;
    padding: 10%;
    background-color: white;
  `;

  const H1 = styled.h1`
    padding: 5px;
  `;

  const H5 = styled.h5`
    padding-top: 10px;
    padding-bottom: 3px;
  `;

  return (
    <Outer>
      <Inner>
        <H1>직업가치관검사</H1>
        <H5>이름</H5>
        <Input onChange={inputChange} />
        <H5>성별</H5>
        <RadioButton value="남자" group="gender" onChange={radioChange} />
        <RadioButton value="여자" group="gender" onChange={radioChange} />
        <Button name="검사시작" disabled={status} onClick={checkUser} />
      </Inner>
    </Outer>
  );
};

export default Home;
