import "./style.css";
import Arrow from "./img/Arrow.svg";
import { useState, useEffect } from "react";

const Navigation = ({ enableQuestions, goToQuestion, currentId }) => {
  const [arrowsData, setArrowsData] = useState({});
  console.log(currentId);
  useEffect(() => {
    const index = enableQuestions.findIndex((q) => q.id === currentId);
    let begin = enableQuestions.slice(0, index);
    begin = begin.map((e, i) => begin[begin.length - i - 1]);
    const end = enableQuestions.slice(index + 1);
    setArrowsData({
      prev: begin.find((q) => q.enabled)?.id,
      next: end.find((q) => q.enabled)?.id,
    });
  }, [enableQuestions, currentId]);
  useEffect(() => {
    if (!Object.keys(enableQuestions).length) {
      return;
    }
    if (arrowsData.prev > -1 || arrowsData.next > -1) {
      goToQuestion(arrowsData.next > -1 ? arrowsData.next : arrowsData.prev);
    }
  }, [enableQuestions]);

  return (
    <div className="circles">
      <div className="buttons">
        <button
          className={
            "base-btn base-btn--left base-btn--emphasis" +
            (currentId !== 0 && (arrowsData.prev || arrowsData.prev === 0)
              ? ""
              : " base-btn--disabled")
          }
          disabled={
            currentId === 0 || !(arrowsData.prev || arrowsData.prev === 0)
          }
          onClick={() => goToQuestion(arrowsData.prev)}
        >
          <img className="image-arrow" src={Arrow}></img>
        </button>
      </div>
      {enableQuestions.map((q) => (
        <button
          key={q.id}
          tabIndex={0}
          disabled={currentId === 0}
          className={
            "circle" +
            (q.enabled ? "" : " circle--filled") +
            (currentId === q.id ? " circle--active" : "")
          }
          onClick={() => goToQuestion(q.id)}
        ></button>
      ))}
      <div className="buttons">
        <button
          className={
            "base-btn base-btn--right base-btn--emphasis" +
            (currentId !== 0 && (arrowsData.next || arrowsData.next === 0)
              ? ""
              : " base-btn--disabled")
          }
          disabled={
            currentId === 0 || !(arrowsData.next || arrowsData.next === 0)
          }
          onClick={() => goToQuestion(arrowsData.next)}
        >
          <img src={Arrow}></img>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
