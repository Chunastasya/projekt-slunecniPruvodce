import "./style.css";
import { useState } from "react";

const Question = ({currentQuestion, onSelect}) => {
    const [currentAnswer, setCurrentAnswer] = useState(null);


        const handleClick = (answer) => {
             setCurrentAnswer(answer.value)
          onSelect({[currentQuestion.id] : answer.value})
          
          
        
          
         
        
      };
  return (
    <div className="question">
      <h1>{currentQuestion.question}</h1>
      <div className="answers">
      {
        currentQuestion.answers.map((answer) => (
            <div className={"answer " + (currentAnswer  === answer.value ? "answer--selected" : "")} onClick={() => handleClick(answer)}  key={answer.value}>
                
                {answer.image? <img className="test_image" src={answer.image} alt={answer.text}></img> : null}
                
                
        <p className="answer_text">{answer.text}</p>
        </div>
        ))}
  
    </div>
    </div>
  );
};

export default Question;