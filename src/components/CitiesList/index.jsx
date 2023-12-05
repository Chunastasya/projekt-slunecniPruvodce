import "./style.css";

const CitiesList = ({ cities, selectCity }) => {
  return (
    <div className="location-details location-details--hidden">
      <h2 className="location-details__title">Města</h2>
      <div className="location-details__card">
        <div className="location-details__body">
          <ul className="cities">
            {cities.map((city) => (
              <li
                className="city"
                role="button"
                tabIndex={0}
                key={city.id}
                onKeyUp={(e) =>
                  (e.key === "Enter" || e.code == "Space") && selectCity(city)
                }
                onClick={() => selectCity(city)}
              >
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
