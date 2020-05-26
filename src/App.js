import React from "react";

import Navbars from "./components/Navbar/Navbars";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Navbars />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/project" component={Project} />
			</Switch>
		</Router>
	);
}

export default App;
