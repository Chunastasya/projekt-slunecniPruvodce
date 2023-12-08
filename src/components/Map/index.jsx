import { useState, useRef } from "react";
import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { geoPath } from "d3-geo";
import "./style.css";
import node from "/assets/texts/node.json";

const geoUrl =
  "https://github.com/amcharts/amcharts4/blob/master/dist/geodata/es2015/json/region/world/europeUltra.json";

const Map = ({ onSelectCoordinates, cities, activeCity, selectCity }) => {
  const map = useRef(null);
  
  const [zoomData, setZoomData] = useState({
    coordinates: [0, 0],
    zoom: 1,
  });
  const [coordinates, setCoordinates] = useState([]);
  
  const MAX_WIDTH = 400;
  const MAX_HEIGHT = 300;
  const PROJECTION_CONFIG = {
    rotate: [-20.0, -55.0, 0],
    scale: 300,
  };
  const MARKER_RADIUS = 2;
  const COLOR_EMPHASIS = "#f5972a";
  const COLOR_DARK = "#854b39";
  
  const onGeoEventFactory = (handleCoordinates, geo, projection) => {
    const gPath = geoPath().projection(projection);

    return (evt) => {
      const dim = evt.target.getBoundingClientRect();
      const cx = evt.clientX - dim.left;
      const cy = evt.clientY - dim.top;

      const [geoX, geoY] = gPath.bounds(geo)[0];
      //we need root SVG element of our map
      const svg = evt.nativeEvent.srcElement.viewportElement;

      //adjust for SVG width on the page / internal rendering width
      const { width, height } = map.current.getBoundingClientRect();
      const adjustScale =
        zoomData.zoom * Math.min(width / MAX_WIDTH, height / MAX_HEIGHT);

      // these are the coords in SVG coordinate system
      const clickCoordsInsideSvg = [
        geoX + cx / adjustScale,
        geoY + cy / adjustScale,
      ];
      const c = projection.invert(clickCoordsInsideSvg);
      // 'unproject' the SVG coords to get lat and long
      handleCoordinates(c, geo, projection);
      setCoordinates(c);
    };
  };
  
  const handleZoom = (geo) => {
    setZoomData(geo);
  };
  
  return (
    <div>
      <ComposableMap
        data-tip=""
        width={MAX_WIDTH}
        height={MAX_HEIGHT}
        projection="geoAzimuthalEqualArea"
        className="map"
        ref={map}
        projectionConfig={PROJECTION_CONFIG}
      >
        <ZoomableGroup zoom={1} center={[10.0, 50.0]} onMoveEnd={handleZoom}>
          <Geographies geography={node}>
            {({ geographies, projection }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#F6D6CB"
                    stroke="#E5BC9B"
                    strokeWidth="0.25px"
                    tabIndex={-1}
                    onClick={onGeoEventFactory(
                      onSelectCoordinates,
                      geo,
                      projection
                    )}
                  />
                );
              })
            }
          </Geographies>
          {coordinates.length ? (
            <Marker coordinates={coordinates}>
              <circle r={MARKER_RADIUS} fill={COLOR_EMPHASIS} />
            </Marker>
          ) : null}
          {Array.isArray(cities)
            ? cities.map((city) => (
                <Marker
                  role="button"
                  tabIndex={0}
                  key={city.id}
                  coordinates={city.coordinates}
                  onClick={() => selectCity(city)}
                  onKeyUp={(e) =>
                    (e.key === "Enter" || e.code == "Space") && selectCity(city)
                  }
                >
                  <circle
                    r={MARKER_RADIUS}
                    fill={
                      activeCity?.id === city.id ? COLOR_EMPHASIS : COLOR_DARK
                    }
                  />
                </Marker>
              ))
            : null}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(Map);
