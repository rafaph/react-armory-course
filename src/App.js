import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import YourFirstReactApp from "./classes/YourFirstReactApp";
import JSXConvertsToJavascript from "./classes/JSXConvertsToJavascript";
import LetsPlayWithElements from "./classes/LetsPlayWithElements";
import ItsJustJavascript from "./classes/ItsJustJavascript";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">01 - Your First React App</Link>
          </li>
          <li>
            <Link to="/02">02 - JSX converts to JavaScript</Link>
          </li>
          <li>
            <Link to="/04">04 - Let’s play with Elements</Link>
          </li>
          <li>
            <Link to="/07">07 - It’s just JavaScript</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={YourFirstReactApp} />
        <Route path="/02" component={JSXConvertsToJavascript} />
        <Route path="/04" component={LetsPlayWithElements} />
        <Route path="/07" component={ItsJustJavascript} />
      </div>
    </Router>
  );
}

export default App;
