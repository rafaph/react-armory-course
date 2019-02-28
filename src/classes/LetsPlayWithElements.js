import React from "react";

function LetsPlayWithElements() {
  const square = React.createElement("div", {
    style: {
      width: "100px",
      height: "100px",
      backgroundColor: "red",
      margin: "10px"
    }
  });

  return React.createElement(
    // The first argument specifies the element's type
    "div",

    // The second argument specifies the element's attributes, or "props"
    { style: { border: "5px solid blue" } },

    // The remaining arguments list the element's children
    square,
    square,
    square
  );
}

export default LetsPlayWithElements;
