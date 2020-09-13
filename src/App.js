import React from "react";
import "./App.css";
import Products from "./components/Producs/Producs";
import Books from "./components/Books/Books";
import AboutMe from "./components/AboutMe/AboutMe";

import { Switch, Route } from "react-router-dom";

function App(props) {
  console.log(props)
  return (
    <Switch>
      <Route exact path="/">
        <Products perPage={4} />
      </Route>
      <Route path="/books">
        <Books />
      </Route>
      <Route path="/info">
        <AboutMe />
      </Route>
    </Switch>
  );
}

export default App;
