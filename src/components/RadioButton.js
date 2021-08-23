import React from 'react';

const RadioButton = ({value, onChange }) => {
  const radioChange = e => {
    onChange(e.target.value);
  };
  return (
    <>
      <div className="form-check">
        <input
          value={value}
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onClick={radioChange}
        />
        <label class="form-check-label" for="flexRadioDefault1">
          {value}
        </label>
      </div>
    
    </>
  );
};

export default RadioButton;
