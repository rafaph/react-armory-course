import React from 'react';

function ItsJustJavascript() {
    let greeting;
    if (new Date().getHours() < 12) {
        const style = {color: 'green'};
        greeting = React.createElement('h1', {style}, 'Good morning!');
    } else {
        const style = {color: 'red'};
        greeting = React.createElement('h1', {style}, 'Good afternoon!');
    }

    // Create an element, but only if it is the weekend
    const dayOfWeek = new Date().getDay();
    let weekend = null;
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekend = React.createElement('strong', {}, 'Hooray! It\'s the weekend!');
    }

    return React.createElement(
        'div',
        {},
        greeting,

        // If a child is `null`, `false` or `undefined`, React is smart enough
        // to not render anything
        weekend
    );
}

export default ItsJustJavascript;
