import React from "react";
import "./App.css";

import Navbars from "./components/Navbars";
import Content from "./pages/Content";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Socialmedia from "./components/Socialmedia";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Content}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
      <Socialmedia />
    </Router>
  );
}

export default App;
