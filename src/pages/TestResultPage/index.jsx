import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import results from "/assets/texts/test_results.json";
import { Link } from "react-router-dom";

export const TestResultPage = () => {
  const { score } = useParams();
  const [result, setResult] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    setAnswers(JSON.parse(localStorage.getItem("answers")));
    setResult(results.find((r) => r.minValue <= score && r.maxValue >= score));
  }, []);
  console.log(result);
  return (
    <div className="test-result">
      {result ? (
        <>
          <div className="test-result__contant">
            <h1>{result.name}</h1>
            <p className="test-result__text">{result.text}</p>
            <div className="buttons">
              <Link to="/test" className="base-btn base-btn--left ">
                Opakovat Test
              </Link>
              <Link className="base-btn base-btn--emphasis base-btn--right ">
                Zjistit aktuální UV Index
              </Link>
            </div>
          </div>
          <img className="test-result__image" src={result.image}></img>
        </>
      ) : null}
    </div>
  );
};
