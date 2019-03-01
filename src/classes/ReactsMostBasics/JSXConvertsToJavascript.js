import React from 'react';

function JSXConvertsToJavascript() {
    return React.createElement(
        'a',
        {
            href: 'https://xkcd.com/221/'
        },
        React.createElement('img', {
            src: 'https://imgs.xkcd.com/comics/random_number.png'
        })
    );
}

export default JSXConvertsToJavascript;
