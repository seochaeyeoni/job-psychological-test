import React from 'react';
import Button from '../components/Button';
import NameInput from '../components/Input';
import RadioButton from '../components/RadioButton';

const Home = () => {
  return (
    <>
      <h1>직업가치관검사</h1>
      <h5>이름</h5>
      <NameInput />
      <h5>성별</h5>
      <RadioButton value1="남자" value2="여자"/>
      <Button name="검사시작" disabled={false}/>
    </>
  );
};

export default Home;
