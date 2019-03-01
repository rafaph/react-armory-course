import React from 'react';
import {HashRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import YourFirstReactApp from './classes/ReactsMostBasics/YourFirstReactApp';
import JSXConvertsToJavascript from './classes/ReactsMostBasics/JSXConvertsToJavascript';
import LetsPlayWithElements from './classes/ReactsMostBasics/LetsPlayWithElements';
import ItsJustJavascript from './classes/ReactsMostBasics/ItsJustJavascript';
import ReactSpiralFizzBuzz from './classes/ReactsMostBasics/ReactSpiralFizzBuzz';
import TheChildrenProp from './classes/CustomReactElements/TheChildrenProp';
import LetsDrawAFractal from './classes/CustomReactElements/LetsDrawAFractal';

function App() {
    return (
        <Router basename="/">
            <div>
                <ul>
                    <li style={{display: 'inline'}}>
                        <Link to="/reacts-most-basics">1 - React's Most Basics</Link>
                    </li>
                    <li style={{display: 'inline', marginLeft: 15}}>
                        <Link to="/custom-react-elements">2 - Custom React Elements</Link>
                    </li>
                </ul>
                <hr/>
                <Switch>
                    <Route path="/reacts-most-basics" component={({match}) => (
                        <>
                            <ul>
                                <li>
                                    <Link to={`${match.url}/01`}>01 - Your First React App</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/02`}>02 - JSX converts to JavaScript</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/04`}>04 - Let’s play with Elements</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/07`}>07 - It’s just JavaScript</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/08`}>08 - React Spiral FizzBuzz</Link>
                                </li>
                            </ul>
                            <hr/>
                            <Switch>
                                <Route path={`${match.url}/01`} component={YourFirstReactApp}/>
                                <Route path={`${match.url}/02`} component={JSXConvertsToJavascript}/>
                                <Route path={`${match.url}/04`} component={LetsPlayWithElements}/>
                                <Route path={`${match.url}/07`} component={ItsJustJavascript}/>
                                <Route path={`${match.url}/08`} component={ReactSpiralFizzBuzz}/>
                                <Redirect from={match.url} to={`${match.url}/01`}/>
                            </Switch>
                        </>
                    )}/>
                    <Route path="/custom-react-elements" component={({match}) => (
                        <>
                            <ul>
                                <li>
                                    <Link to={`${match.url}/01`}>01 - The <strong>children</strong> prop</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/06`}>06 - Let’s draw a fractal</Link>
                                </li>
                            </ul>
                            <hr/>
                            <Switch>
                                <Route path={`${match.url}/01`} component={TheChildrenProp}/>
                                <Route path={`${match.url}/06`} component={LetsDrawAFractal}/>
                                <Redirect from={match.url} to={`${match.url}/01`}/>
                            </Switch>
                        </>
                    )}/>
                    <Redirect from="/" to="/reacts-most-basics"/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
