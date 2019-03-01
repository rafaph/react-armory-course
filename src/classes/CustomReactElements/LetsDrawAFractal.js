import React from 'react';
import { getBoxStyle } from './PythagorasTree.js'

// Don't set `totalLevels` above 8 -- your browser will
// freeze due to the amount of work required.
let totalLevels = 5;
let heightFactor = 0.37;
let lean = -0.10;
let size = 100;

const TreeBox = (props) => {
  const style = getBoxStyle({
    level: props.level,
    right: props.right,
    heightFactor,
    lean,
    size,
    totalLevels,
  });

  const rightChild =
    props.level < totalLevels &&
    React.createElement(TreeBox, {
      right: true,
      level: props.level + 1
    });

  const leftChild =
    props.level < totalLevels &&
    React.createElement(TreeBox, {
      level: props.level + 1
    });

  return React.createElement('div', { style },
    rightChild,
    leftChild
  );
};

function LetsDrawAFractal() {
    return React.createElement(TreeBox, { level: 0 });
}

export default LetsDrawAFractal;

