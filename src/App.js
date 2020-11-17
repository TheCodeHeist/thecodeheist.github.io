import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Learn from "./pages/Learn";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/learn" component={Learn} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
