import "./style.css";
import { useState, useRef } from "react";
import { memo } from "react";
import node from "../../assets/texts/node.json";
import __localPosition from "./mapHelper";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { geoPath } from "d3-geo";

const geoUrl =
  "https://github.com/amcharts/amcharts4/blob/master/dist/geodata/es2015/json/region/world/europeUltra.json";

const Map = ({ onSelectCoordinates }) => {
  const map = useRef(null);
  const [zoomData, setZoomData] = useState({
    coordinates: [0, 0],
    zoom: 1,
  });
  const [coordinates, setCoordinates] = useState([]);
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
      const adjustScale =
        zoomData.zoom * (svg.clientWidth / svg.viewBox.baseVal.width);

      // these are the coords in SVG coordinate system
      const clickCoordsInsideSvg = [
        geoX + cx / adjustScale,
        geoY + cy / adjustScale,
      ];
      const c = projection.invert(clickCoordsInsideSvg);
      console.log(-1, c);
      // 'unproject' the SVG coords to get lat and long
      handleCoordinates(c, geo, projection);
      setCoordinates(c);
    };
  };
  const handleZoom = (geo) => {
    setZoomData(geo);
  };
  const handler = (e) => {
    const result = __localPosition(e, map);
    console.log(result);
  };
  return (
    <div>
      <ComposableMap
        data-tip=""
        width={400}
        height={300}
        projection="geoAzimuthalEqualArea"
        className="map"
        ref={map}
        onClick={handler}
        projectionConfig={{
          rotate: [-20.0, -55.0, 0],
          scale: 300,
        }}
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
              <circle r={2} fill="#f5972a" />
            </Marker>
          ) : null}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(Map);
