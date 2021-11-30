import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/home/home'
import Portfolio from './pages/portfolio/portfolio';
import About from './pages/about/about';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons/fa';

function App() {
	return (
		<div className="App">
			<div></div>
				<div className="App__content">
					<Router>
						<Switch>
							
							<Route path="/about">
								<About/>
							</Route>

							<Route path="/portfolio">
								<Portfolio/>
							</Route>
							

							<Route path="/">
								<Home/>
							</Route>

						</Switch>
					</Router>
				</div>
				<div className="App__footer ">
					<Footer className="App__footer-foot "/>
				</div>
			<div></div>
		</div>
	);
}

export default App;
