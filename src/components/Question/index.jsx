import "./style.css";

const Question = ({ currentQuestion, onSelect, currentAnswer }) => {
  const handleClick = (answer) => {
    onSelect({ [currentQuestion.id]: answer.value });
  };
  return (
    <div className="question">
      <h1 className="question__header">{currentQuestion.question}</h1>
      <div className="question__content">
        {currentQuestion.image ? (
          <img
            className="test_image question__image"
            src={currentQuestion.image}
            alt={currentQuestion.text}
          ></img>
        ) : null}

        <div
          className={
            "answers" +
            (currentQuestion.image ? " answers--without-images" : "")
          }
        >
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
                  className="answer__image"
                  src={answer.image}
                  alt={answer.text}
                ></img>
              ) : null}

              <p className="answer__text">{answer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
