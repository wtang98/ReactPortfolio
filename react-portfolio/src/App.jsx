import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/home/home'
import Portfolio from './pages/portfolio/portfolio';

function App() {
	return (
		<div className="App">
			<div className="App__content">
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
		</div>
	);
}

export default App;
