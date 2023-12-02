import "./style.css";
import Arrow from "./img/Arrow.svg";

const Navigation = ({ enableQuestions, goToQuestion }) => {
  return (
    <div className="circles">
      <div className="buttons">
        <button className="base-btn base-btn--left base-btn--emphasis">
          <img className="image-arrow" src={Arrow}></img>
        </button>
      </div>
      {enableQuestions.map((q) => (
        <div
          key={q.id}
          className={"circle" + (q.enabled ? "" : " circle--filled")}
          onClick={() => goToQuestion(q.id)}
        ></div>
      ))}
      <div className="buttons">
        <button className="base-btn base-btn--right base-btn--emphasis">
          <img src={Arrow}></img>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
