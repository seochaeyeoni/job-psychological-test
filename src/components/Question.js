import RadioButton from "./RadioButton"

const Question = ({ Question, value1, value2, onClick }) => {
    return (
        <div>
            <h2>{Question}</h2>
            <RadioButton value={value1} onChange={onClick} />
            <RadioButton value={value2} onChange={onClick} />
        </div>
    )
}

export default Question;