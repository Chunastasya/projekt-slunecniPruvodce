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
      let summ = 0;
      const arr = Object.values(answers);
      arr.forEach((cislo) => {
        summ += cislo;
      });
      navigate(`/test-result/${summ}`);
    }
  }, [answers]);

  return (
    <div className="test">
      <Question
        onSelect={(data) =>
          data[0] === -1
            ? navigate("/test-result/-1")
            : setAnswers({ ...answers, ...data })
        }
        currentQuestion={currentQuestion}
        currentAnswer={answers[currentQuestion.id]}
      ></Question>
      <Navigation
        enableQuestions={enableQuestions}
        goToQuestion={findQuestion}
        currentId={currentQuestion?.id}
      ></Navigation>
    </div>
  );
};
