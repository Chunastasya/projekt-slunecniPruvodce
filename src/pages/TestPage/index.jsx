import { Link } from "react-router-dom";
import test from "/assets/texts/test.json";
import { useState, useEffect } from "react";
import Question from "../../components/Question";
import "./style.css";

export const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(test[1]);
  const [answers, setAnswers] = useState({});

  console.log(currentQuestion, answers);
  return (
    <div className="test">
      <Question
        onSelect={(data) => setAnswers({ ...answers, ...data })}
        currentQuestion={currentQuestion}
        currentAnswer={answers[currentQuestion.id]}
      ></Question>

      <div className="circles">
        <button className="base-btn base-btn--left"></button>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <button className="base-btn base-btn--right"></button>
      </div>
    </div>
  );
};
