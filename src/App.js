import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navbars from "./components/Navbar/Navbars";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

function App() {
	return (
		<Router>
			<Navbars />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/contact" component={Contact} />
			</Switch>
		</Router>
	);
}

export default App;
