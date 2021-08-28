const Input = ({ onChange }) => {
  const inputChange = e => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        style={{
          maxWidth: '350px',
          textAlign: 'center',
          display: 'inline-block',
          margin: '5px',
          fontFamily: 'NanumGothic',
        }}
        class="form-control"
        type="text"
        placeholder="이름"
        aria-label="default input example"
        onChange={inputChange}
      />
      <p style={{ width: '100%', textAlign: 'center', padding: '0px', fontSize: '10pt' }}>
        👉이름은 한글 2~4자 이내로 입력해주세요👈
      </p>
    </div>
  );
};

export default Input;
