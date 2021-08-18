import React from 'react';

const Button = ({name, disabled}) => {
  return (
    <button type="button" class="btn btn-lg btn-primary" disabled={disabled}>{name}</button>
  );
};

export default Button;
