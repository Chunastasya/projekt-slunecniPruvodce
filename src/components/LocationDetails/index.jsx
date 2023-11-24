import "./style.css";
import { Link } from "react-router-dom";

const LocationDetails = ({ uv, location }) => {
  return (
    <div className="location-details">
      <h2 className="location-details__title">{location.name}</h2>
      <div className="location-details__card">
        <div className="location-details__body">
          {uv.sun_info.sun_position.altitude > 0 ? (
            <>
              <div className="location-details__section">
                <div className="location-details__subtitle">Teď</div>
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
                      <li className="uv-item" key={i}>
                        <div className="uv-item__title">Typ {i + 1}</div>
                        <div className="uv-item__text">
                          {i}
                          {value}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </>
          ) : (
            <div className="location-details__section">
              V současné době je nízký UV index kvůli tmavé době. To znamená, že
              se můžete bezpečně pohybovat venku bez další ochrany. Užijte si
              večerní procházku!
            </div>
          )}
        </div>
        <div className="location-details__footer">
          <div className="location-details__subtitle">Nevíte svůj typ?</div>
          <button className="base-btn location-details__btn--test">
            Spustit test
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
