import "./style.css";
import { useState } from "react";
import Map from "../../components/Map";
import LocationDetails from "../../components/LocationDetails";
const MapPage = () => {
  const [dataUV, setDataUV] = useState(null);
  const getUVIndex = async (coordinates, geo, projection) => {
    console.log(coordinates, geo.properties, projection);
    try {
      const myHeaders = new Headers();
      myHeaders.append("x-access-token", "openuv-3bsazrlo7ffpej-io");
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      const response = await fetch(
        `https://api.openuv.io/api/v1/uv?lat=${coordinates[0]}&lng=${coordinates[1]}&alt=100&dt=`,
        requestOptions
      );
      const data = await response.json();
      console.log(data.result);
      setDataUV({
        uv: data.result,
        location: geo.properties,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="map-page">
      <h1>Mapa UV Indexu</h1>
      <div className="map__content">
        <Map onSelectCoordinates={getUVIndex} />
        {dataUV ? <LocationDetails {...dataUV} /> : null}
      </div>
    </div>
  );
};

export default MapPage;
