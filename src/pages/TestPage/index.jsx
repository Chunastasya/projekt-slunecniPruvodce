import { Link } from "react-router-dom";
import test from "/assets/texts/test.json";
import { useState, useEffect } from "react";
import Question from "../../components/Question";
import "./style.css";

export const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(test[1]);
  const [answers, setAnswers] = useState({});
  const [enableQuestions, setEnableQuestions] = useState([]);
  useEffect(() => {
    setEnableQuestions(
      test.map((q) => ({
        id: q.id,
        enabled: !answers.hasOwnProperty(q.id),
      }))
    );
  }, [answers]);

  console.log(currentQuestion, answers);
  return (
    <div className="test">
      <Question
        onSelect={(data) => setAnswers({ ...answers, ...data })}
        currentQuestion={currentQuestion}
        currentAnswer={answers[currentQuestion.id]}
      ></Question>
    </div>
  );
};
