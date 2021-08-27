import React from 'react';
const Button = ({ name, disabled, onClick }) => {
  return (
    <button style={{margin: "20px"}} type="button" class="btn btn-lg btn-primary" disabled={disabled} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
