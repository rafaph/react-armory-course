import React from 'react';

// A Component that centers the element passed via its `children` prop
function Center(props) {
    const style = {textAlign: 'center'};
    return React.createElement('div', {style}, props.children);
}

function TheChildrenProp() {
    return React.createElement(
        Center,
        {},
        React.createElement('h1', {}, "Cream puffs and kimchi!")
    );
}

export default TheChildrenProp;
