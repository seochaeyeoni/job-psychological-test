import RadioButton from './RadioButton';

const ExampleQuestion = ({
  Question,
  value1,
  value2,
  group,
  onClick,
}) => {
  return (
    <div>
      <h4>{Question}</h4>
      <RadioButton
        value={value1}
        group={group}
        onChange={onClick}
      />
      <RadioButton
        value={value2}
        group={group}
        onChange={onClick}
      />
    </div>
  );
};

export default ExampleQuestion;
