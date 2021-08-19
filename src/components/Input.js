const Input = ({ onChange }) => {
  const inputChange = e => {
    onChange(e.target.value);
  };
  
  return (
    <input
      class="form-control"
      type="text"
      placeholder="이름"
      aria-label="default input example"
      onChange={inputChange}
    />
  );
};

export default Input;
