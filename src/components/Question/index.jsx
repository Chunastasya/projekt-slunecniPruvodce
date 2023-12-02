import "./style.css";

const Question = ({ currentQuestion, onSelect, currentAnswer }) => {
  const handleClick = (answer) => {
    onSelect({ [currentQuestion.id]: answer.value });
  };
  return (
    <div className="question">
      <h1 className="question__header">{currentQuestion.question}</h1>
      <div className="test_imageButtons">
      
      {currentQuestion.image ? (
              <img
                className="test_image question--image"
                src={currentQuestion.image}
                alt={currentQuestion.text}
              ></img>
            ) : null}
            
      <div className="answers">
        {currentQuestion.answers.map((answer) => (
          <div
            className={
              "answer " +
              (currentAnswer === answer.value ? "answer--selected" : "")
            }
            onClick={() => handleClick(answer)}
            key={answer.value}
          >
            {answer.image ? (
              <img
                className="test_image"
                src={answer.image}
                alt={answer.text}
              ></img>
            ) : null}

            <p className="answer_text">{answer.text}</p>
          </div>
        ))}
      </div>
      
      </div>
    </div>

  );
};

export default Question;
