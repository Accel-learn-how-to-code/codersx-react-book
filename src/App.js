import React from "react";
import "./App.css";
import Products from "./components/Producs/Producs";
import Books from "./components/Books/Books";
import AboutMe from "./components/AboutMe/AboutMe";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Products />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/info">
          <AboutMe />
        </Route>
      </Switch>
    </Router>
    //<Products />
  );
}

export default App;
