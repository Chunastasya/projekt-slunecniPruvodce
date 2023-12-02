import * as d3 from "d3";

export default function __localPosition(event, container) {
  // d3.mouse
  // Returns the x and y coordinates of the current event relative to the specified container. The container may be an HTML or SVG container element, such as a G element or an SVG element. The coordinates are returned as a two-element array of numbers [x, y].
  // BUG: d3.mouse doesn't observe CSS transform on Firefox — https://github.com/d3/d3-selection/issues/81
  // TEMPORARY FIX: https://github.com/d3/d3-selection/issues/191#issuecomment-474987103

  let position = [];

  //   if (
  //     platform.name === "Firefox" &&
  //     event.target.closest(".half-slide-active")
  //   ) {
  //     // this works for Firefox even in transformed container
  //     // if (platform.name === 'Firefox')
  //     // but creates another bug when used on top of another SVG element (with different viewbox?),
  //     // so make temporary fix only of .half-slide-active to fix the orginal bug with new bug
  //     // console.log(d3.event.target.closest('.half-slide-active'));
  //     position = [event.offsetX, event.offsetY];
  //   } else {
  // this works for Chrome
  position = d3.pointer(event, container);

  // fix for ios
  // https://github.com/d3/d3-selection/blob/main/src/pointer.js
  // vs
  // https://github.com/d3/d3-selection/blob/main/src/pointers.js
  // both or nothing
  if (!position[0]) {
    [position] = d3.pointers(event, container);
  }
  //   }

  return {
    x: d3.format(".0f")(position[0]),
    y: d3.format(".0f")(position[1]),
  };
}
