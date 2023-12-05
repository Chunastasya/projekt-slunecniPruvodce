import "./style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import closeCross from "./img/close-cross.svg";

const LocationDetails = ({ uv, location, date, skinType }) => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (!isOpen) {
      setIsOpen(true);
    }
  }, [uv]);
  const getTime = (min) => {
    let result = "";
    const hours = Math.floor(min / 60);
    const minuts = min % 60;
    if (hours) {
      result += `${hours} hodin${
        hours % 10 > 3 || Math.floor(hours / 10) === 1
          ? ""
          : hours % 10 === 1
          ? "a"
          : "y"
      } `;
    }
    result += `${minuts} minut${
      minuts % 10 > 3 || Math.floor(minuts / 10) === 1
        ? ""
        : minuts % 10 === 1
        ? "a"
        : "y"
    }`;
    return result;
  };
  return (
    <div
      className={
        "location-details" + (isOpen ? "" : " location-details--hidden")
      }
    >
      <img
        src={closeCross}
        alt="close button"
        role="button"
        className="location-details__close"
        tabIndex={0}
        onClick={() => setIsOpen(false)}
      />
      <h2 className="location-details__title">{location.name}</h2>
      <div className="location-details__card">
        <div className="location-details__body">
          {uv?.sun_info?.sun_position?.altitude > 0 ? (
            <>
              <div className="location-details__section">
                <div className="location-details__subtitle">
                  {date ? new Date(date).toLocaleString() : "Teď"}
                </div>
                <ul className="location-details__list">
                  <li className="uv-item">
                    <div className="uv-item__title">UV Index</div>
                    <div className="uv-item__text">{uv.uv}</div>
                  </li>
                </ul>
              </div>
              <div className="location-details__section">
                <div className="location-details__subtitle">Bezpečný čas</div>
                <ul className="location-details__list">
                  {Object.values(uv.safe_exposure_time || []).map(
                    (value, i) => (
                      <li
                        className={
                          "uv-item" +
                          ((skinType && Number(skinType) === i + 1) ||
                          (skinType === "0" && i === 0)
                            ? " ui-item--active"
                            : "")
                        }
                        key={i}
                      >
                        <div className="uv-item__title">Typ {i + 1}</div>
                        <div className="uv-item__text">{getTime(value)}</div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </>
          ) : (
            <div className="location-details__section">
              {uv?.error ||
                "V současné době je nízký UV index kvůli tmavé době. To znamená, že se můžete bezpečně pohybovat venku bez další ochrany. Užijte si večerní procházku!"}
            </div>
          )}
        </div>
        <div className="location-details__footer">
          <div className="location-details__subtitle">
            Nevíte svůj typ pokožky?
          </div>
          <Link
            to="/test"
            className="base-btn base-btn--right location-details__btn--test"
          >
            Spustit test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
