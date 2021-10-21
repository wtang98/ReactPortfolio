import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/home/home'
import Portfolio from './pages/portfolio/portfolio';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/portfolio">
						<Portfolio/>
					</Route>

					<Route path="/">
						<Home/>
					</Route>
					
					

				</Switch>
			</Router>
		</div>
	);
}

export default App;
