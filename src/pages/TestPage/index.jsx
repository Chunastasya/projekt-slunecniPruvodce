import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import test from "/assets/texts/test.json";
import { useState, useEffect } from "react";
import Question from "../../components/Question";
import "./style.css";
import Navigation from "../../components/Navigation";

export const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(test[0]);
  const [answers, setAnswers] = useState({});
  const [enableQuestions, setEnableQuestions] = useState([]);
  const navigate = useNavigate();

  const findQuestion = (id) => {
    setCurrentQuestion(test.find((q) => q.id === id));
  };
  useEffect(() => {
    setEnableQuestions(
      test.map((q) => ({
        id: q.id,
        enabled: !answers.hasOwnProperty(q.id),
      }))
    );
    if (Object.keys(answers).length === test.length) {
      navigate("/test-result/1");
    }
  }, [answers]);

  const handleResult = () => {
    localStorage.setItem("answers", JSON.stringify(answers));
  };

  console.log(currentQuestion, answers);
  return (
    <div className="test">
      <Question
        onSelect={(data) => setAnswers({ ...answers, ...data })}
        currentQuestion={currentQuestion}
        currentAnswer={answers[currentQuestion.id]}
      ></Question>
      <Navigation
        enableQuestions={enableQuestions}
        goToQuestion={findQuestion}
        currentId={currentQuestion?.id}
      ></Navigation>
      <button onClick={handleResult}>Vyhodnotit</button>
    </div>
  );
};
