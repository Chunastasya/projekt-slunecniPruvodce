import './style.css'
import { Link } from 'react-router-dom'; 
import { useState, useEffect, useRef } from 'react';
import { memo } from "react";

import {
	ComposableMap,
	Geographies,
	Geography,
	Annotation,
	ZoomableGroup
  } from "react-simple-maps";
  import { geoPath } from "d3-geo";
  
  const rounded = num => {
	if (num > 1000000000) {
	  return Math.round(num / 100000000) / 10 + "Bn";
	} else if (num > 1000000) {
	  return Math.round(num / 100000) / 10 + "M";
	} else {
	  return Math.round(num / 100) / 10 + "K";
	}
  };
  
  const getUVIndex = () => {
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
  }
 const showTooltip = () => {}
const MapPage = () => {
  const [scale, setScale] = useState(1);
  return (
    <div className="map-page">
      Map
      <div className="map">
        <ComposableMap
          data-tip=""
          width={400}
          height={300}
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-20.0, -55.0, 0],
            scale: 300
          }}
        >
          <ZoomableGroup zoom={1} center={[10.0, 50.0]}>
            <Geographies geography={'https://raw.githubusercontent.com/prisma-capacity/d3-map-europe/master/data/europe.topo.json'}>
              {({ geographies, projection }) =>
                geographies.map(geo => {
          const onGeoEventFactory = (handleCoordinates) => {
          const gPath = geoPath().projection(projection);

          return (evt) => {
            const dim = evt.target.getBoundingClientRect();
            const cx = evt.clientX - dim.left;
            const cy = evt.clientY - dim.top;

            const [geoX, geoY] = gPath.bounds(geo)[0];
            //we need root SVG element of our map
            const svg = evt.nativeEvent.srcElement.viewportElement;

            //adjust for SVG width on the page / internal rendering width
            const adjustScale =
            scale * (svg.clientWidth / svg.viewBox.baseVal.width);

            // these are the coords in SVG coordinate system
            const clickCoordsInsideSvg = [
            geoX + (cx / adjustScale),
            geoY + (cy / adjustScale)
            ];
  // 'unproject' the SVG coords to get lat and long                 
  handleCoordinates(projection.invert(clickCoordsInsideSvg));
          };
          };

          return (
                  <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                      onClick={onGeoEventFactory((coordinates) => {
                        console.log(coordinates)
                      })}
                    />
                )})
              }
            </Geographies>
          </ZoomableGroup>
          {/* <Annotation
            subject={[2.3522, 48.8566]}
            dx={-90}
            dy={-30}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 3,
              strokeLinecap: "round"
            }}
          >
            <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
              {"Paris"}
            </text>
          </Annotation> */}
        </ComposableMap>
      </div>
    </div>
  );
};

export default memo(MapPage)