import "./style.css";

const Question = ({currentQuestion}) => {
  return (
    <div className="question">
      <h1>{currentQuestion.question}</h1>
      {
        currentQuestion.answers.map((answer) => <p key={answer.value}>{answer.text}</p>)

      }
    </div>
  );
};

export default Question;