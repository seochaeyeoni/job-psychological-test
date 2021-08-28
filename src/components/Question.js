import RadioButton from './RadioButton';

const Question = ({
  Question,
  value1,
  value2,
  hiddenValue1,
  hiddenValue2,
  checked,
  group,
  onClick,
}) => {
  return (
    <div>
      <h5 style={{ fontWeight: 'bold' }}>{'Q' + (group + 1) + '. ' + Question}</h5>
      <RadioButton
        value={value1}
        group={group}
        hiddenValue={hiddenValue1}
        answer={checked === hiddenValue1 ? true : false}
        onChange={onClick}
      />
      <RadioButton
        value={value2}
        group={group}
        hiddenValue={hiddenValue2}
        answer={checked === hiddenValue2 ? true : false}
        onChange={onClick}
      />
    </div>
  );
};

export default Question;
