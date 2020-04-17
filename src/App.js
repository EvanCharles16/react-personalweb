import React from "react";
import "./App.css";

import Navbars from "./components/Navbars";
import Content from "./pages/Content";
import About from "./pages/About";
import Article from "./pages/Detail/Article";
import Detail from "./pages/Detail/Detail";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Socialmedia from "./components/Socialmedia";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/about" component={About} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/article/:id" component={Detail} />
      </Switch>
      <Socialmedia />
    </Router>
  );
}

export default App;
