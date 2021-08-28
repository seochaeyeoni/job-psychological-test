import React from 'react';

const RadioButton = ({ value, hiddenValue, group, answer, onChange }) => {
  const radioChange = e => {
    onChange(group, e.target.value);
  };
  return (
    <>
      <div
        className="form-check"
        style={{
          maxWidth: '150px',
          textAlign: 'center',
          display: 'inline-block',
          margin: '15px',
          fontFamily: 'NanumGothic',
        }}
      >
        <input
          checked={answer}
          value={hiddenValue}
          class="form-check-input"
          type="radio"
          name={group}
          id="flexRadioDefault1"
          onChange={radioChange}
        />
        <label class="form-check-label" for="flexRadioDefault1">
          {value}
        </label>
      </div>
    </>
  );
};

export default RadioButton;
