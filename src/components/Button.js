import React from 'react';

const Button = ({ name, disabled, onClick }) => {
  return (
    <button type="button" class="btn btn-lg btn-primary" disabled={disabled} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
