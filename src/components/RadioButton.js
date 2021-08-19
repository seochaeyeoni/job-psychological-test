import React from 'react';

const RadioButton = ({value1, value2, onChange }) => {
  const radioChange = e => {
    onChange(e.target.value);
  };
  return (
    <>
      <div className="form-check">
        <input
          value={value1}
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          onClick={radioChange}
        />
        <label class="form-check-label" for="flexRadioDefault1">
          {value1}
        </label>
      </div>
      <div class="form-check">
        <input
          value={value2}
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onClick={radioChange}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          {value2}
        </label>
      </div>
    </>
  );
};

export default RadioButton;
