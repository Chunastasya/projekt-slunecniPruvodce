import "./style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CitiesList = ({
  cities,
  activeCity,
  selectCity,
}) => {
  return (
    <div className="location-details location-details--hidden">
      <h2 className="location-details__title">Města</h2>
      <div className="location-details__card">
        <div className="location-details__body">
          <ul className="cities">
            {cities.map((city) => (
              <li className="city" onClick={() => selectCity(city)}>
                {city.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CitiesList;
