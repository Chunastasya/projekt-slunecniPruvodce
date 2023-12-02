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
  return <div className="test-result">Test Result</div>;
};
