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
        placeholder="μ΄λ¦"
        aria-label="default input example"
        onChange={inputChange}
      />
      <p style={{ width: '100%', textAlign: 'center', padding: '0px', fontSize: '10pt' }}>
        πμ΄λ¦μ νκΈ 2~4μ μ΄λ΄λ‘ μλ ₯ν΄μ£ΌμΈμπ
      </p>
    </div>
  );
};

export default Input;
