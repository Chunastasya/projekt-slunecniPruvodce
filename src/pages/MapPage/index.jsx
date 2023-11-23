import "./style.css";
import { useState, useEffect } from "react";
import Map from "../../components/Map";

const MapPage = () => {
  const [dataUV, setDataUV] = useState(null);
  const getUVIndex = (coordinates, geo, projection) => {
    console.log(coordinates, geo.properties, projection);
    // try {
    //   const response = fetch("https://platform.prisma-capacity.eu/rest/tso", {
    // 	headers: {
    // 	  Accept: "application/json",
    // 	  "Content-Type": "application/json",
    // 	  "Access-Control-Allow-Origin": "*",
    // 	  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS"
    // 	}
    //   });
    //   let data = null;
    //   response.then(res => {
    // 	data = res.data;
    //   });
    //   return data;
    // } catch (error) {
    //   console.error(error);
    // }
  };
  return (
    <div className="map-page">
      <h1>Mapa UV Indexu</h1>
      <div className="map">
        <Map onSelectCoordinates={getUVIndex} />
      </div>
    </div>
  );
};

export default MapPage;
