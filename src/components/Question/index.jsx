import "./style.css";

const Question = ({currentQuestion}) => {
  return (
    <div className="question">
      <h1>{currentQuestion.question}</h1>
      <div className="answers">
      {
        currentQuestion.answers.map((answer) => (
            <div className="answer" key={answer.value}>
                <img src="/img/test/q0/v0.jpg"></img>
        <p>{answer.text}</p>
        </div>
        ))}

    </div>
    </div>
  );
};

export default Question;