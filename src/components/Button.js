import React from 'react';
const Button = ({ name, disabled, onClick }) => {
  return (
    <button style={{
      minWidth: '150px',
      textAlign: 'center',
      display: 'inline-block',
      margin: '20px',
      marginTop: '50px',
      fontFamily: 'NanumGothic',
    }} type="button" class="btn btn-lg btn-primary" disabled={disabled} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
