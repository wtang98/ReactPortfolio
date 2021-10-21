import './App.css';
import Header from './components/header/header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
im

function App() {
	return (
		<div className="App">
		<Router>
			<Header title={"Home"}/>
			<Switch>
				<Route>

				</Route>

			</Switch>
		</Router>
		</div>
	);
}

export default App;
