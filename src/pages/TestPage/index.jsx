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
<<<<<<< HEAD
      <Question onSelect = {(data) => console.log(data)} currentQuestion = {currentQuestion}></Question>
     
      
      
     
      <div className='circles'>
      <button className='base-btn base-btn--left base-btn--emphasis'></button>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <button className='base-btn base-btn--right base-btn--emphasis'></button>
=======
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
>>>>>>> dd2d4c5d735879f04017099b0d146439baf068c1
      </div>
    </div>
  );
};
