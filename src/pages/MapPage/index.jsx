import { useState, useEffect } from "react";
import Map from "../../components/Map";
import LocationDetails from "../../components/LocationDetails";
import Loader from "../../components/Loader";
import CitiesList from "../../components/CitiesList";
import "./style.css";
import cities from "/assets/texts/cities.json";

const MapPage = () => {
  const [dataUV, setDataUV] = useState(null);
  const [activeCity, setActiveCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [skinType, setSkinType] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [date, setDate] = useState("");
  const [initialDate, setInitialDate] = useState(
    new Date().toISOString().split(".")[0]
  );

  const OPEN_UV_KEY = "openuv-3bsazrlo7ffpej-io";

  useEffect(() => {
    const type = localStorage.getItem("skin-type");
    if (type > -1) {
      setSkinType(type);
    }
  }, []);

  useEffect(() => {
    if (!activeCity) {
      return;
    }
    chooseLocation(activeCity.coordinates, { properties: activeCity });
  }, [activeCity]);

  useEffect(() => {
    const getUVIndex = async () => {
      if (!(coordinates && coordinates.length > 1)) {
        return;
      }
      setIsLoading(true);
      try {
        const myHeaders = new Headers();
        myHeaders.append("x-access-token", OPEN_UV_KEY);
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };
        const response = await fetch(
          `https://api.openuv.io/api/v1/uv?lat=${coordinates[0]}&lng=${coordinates[1]}&alt=100&dt=${date}`,
          requestOptions
        );
        const data = await response.json();
        setDataUV({
          ...(dataUV || {}),
          uvData: data.result,
        });
      } catch (error) {
        setDataUV({
          ...(dataUV || {}),
          uvData: {
            error:
              "Promiňte, ale kvůli velkému množství dotazů jsme dočasně omezeni. Zkuste to prosím znovu zítra.",
          },
        });
        console.log("error", error);
      }
      setIsLoading(false);
    };
    getUVIndex();
  }, [coordinates, date]);

  const chooseLocation = async (c, geo, projection) => {
    setCoordinates(c);
    setDataUV({
      ...(dataUV || {}),
      location: geo.properties,
    });
    if (projection) {
      setActiveCity(null);
    }
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      <div
        className={
          (dataUV && dataUV.uv && dataUV.location) || cities || cities.length
            ? "map-content map-content--details"
            : "map-content"
        }
      >
        <div className="map-content__main">
          <div className="map-content__header">
            <h1>Mapa UV Indexu</h1>
            <label className="map-content__label">
              Čas
              <input
                type="datetime-local"
                className="map-content__input"
                value={date}
                max={initialDate}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>
          <Map
            onSelectCoordinates={chooseLocation}
            cities={cities}
            activeCity={activeCity}
            selectCity={setActiveCity}
          />
        </div>
        {dataUV && dataUV.uvData && dataUV.location ? (
          <div className="map-content__overlay">
            <LocationDetails {...dataUV} date={date} skinType={skinType} />
          </div>
        ) : (
          <CitiesList
            onSelectCoordinates={chooseLocation}
            cities={cities}
            activeCity={activeCity}
            selectCity={setActiveCity}
          />
        )}
      </div>
    </>
  );
};

export default MapPage;
