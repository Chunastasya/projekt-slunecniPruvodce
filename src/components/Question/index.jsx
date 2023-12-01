import "./style.css";

const Question = ({currentQuestion}) => {
  return (
    <div className="question">
      <h1>{currentQuestion.question}</h1>
      <div className="answers">
      {
        currentQuestion.answers.map((answer) => (
            <div className="answer" key={answer.value}>
                {answer.image? <img className="test_image" src={answer.image} alt={answer.text}></img> : null}
                
                
        <p className="answer_text">{answer.text}</p>
        </div>
        ))}

    </div>
    </div>
  );
};

export default Question;