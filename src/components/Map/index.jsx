import "./style.css";
import { useState } from "react";
import { memo } from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";
import { geoPath } from "d3-geo";

const geoUrl =
  "https://raw.githubusercontent.com/prisma-capacity/d3-map-europe/master/data/europe.topo.json";

const Map = ({ onSelectCoordinates }) => {
  const [scale, setScale] = useState(1);
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
      const adjustScale = scale * (svg.clientWidth / svg.viewBox.baseVal.width);

      // these are the coords in SVG coordinate system
      const clickCoordsInsideSvg = [
        geoX + cx / adjustScale,
        geoY + cy / adjustScale,
      ];
      // 'unproject' the SVG coords to get lat and long
      handleCoordinates(
        projection.invert(clickCoordsInsideSvg),
        geo,
        projection
      );
    };
  };
  return (
    <ComposableMap
      data-tip=""
      width={400}
      height={300}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, -55.0, 0],
        scale: 300,
      }}
    >
      <ZoomableGroup zoom={1} center={[10.0, 50.0]}>
        <Geographies geography={geoUrl}>
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
  );
};

export default memo(Map);
