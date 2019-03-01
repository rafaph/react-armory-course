import React from 'react';
import { getBoxStyle } from './Spiral.js';

function ReactSpiralFizzBuzz() {
    const boxes = new Array(15);
    let children = null;
    for (let i = 1; i <= 15; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            children = React.createElement('strong', {}, 'FizzBuzz')
        } else if (i % 3 === 0) {
            children = React.createElement('strong', {}, 'Fizz')
        } else if (i % 5 === 0) {
            children = React.createElement('strong', {}, 'Buzz')
        } else {
            children = String(i);
        }
        boxes[i - 1] = React.createElement('div', { style: getBoxStyle(i - 1), key: i }, children);
        children = null;
    }
    return React.createElement('div', { style: { position: 'absolute', left: 200 }}, boxes);
}

export default ReactSpiralFizzBuzz;