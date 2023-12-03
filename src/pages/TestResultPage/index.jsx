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
    const result = results.find((r) => r.minValue <= score && r.maxValue >= score);
    setResult(result);
    if (result) {
      localStorage.setItem("skin-type", result.id);
    }
  }, []);
  return (
    <div className="test-result">
      <div className="test-result__header">
        <h1 className="test-result__title">
          {result?.name || "Výsledek nenalezen"}
        </h1>
        {result?.SPF ? (
          <div className="test-result__spf">
             SPF
            <span className=" base-btn base-btn--right test-result__spf--count">
              {result.SPF}
            </span>
            <Link to="/recommendation" className='base-btn'>Zjistit více</Link>
          </div>
        ) : null}
      </div>
      <p className="test-result__text">
        {result?.text ||
          "Bohužel nemáme žádné výsledky Vašeho testu. Doporučujeme opakovat test."}
      </p>
      <div className="test-result__buttons">
        <Link to="/test" className="base-btn base-btn--left ">
          Opakovat Test
        </Link>
        <Link
          to="/map"
          className="base-btn base-btn--emphasis base-btn--right "
        >
          Zjistit aktuální UV Index
        </Link>
      </div>
      {result?.image ? (
        <img className="test-result__image" src={result.image}></img>
      ) : null}
    </div>
  );
};
