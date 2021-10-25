import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/home/home'
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Footer from './components/footer/footer';

function App() {
	return (
		<div className="App">
			<div className="App__content">
				<Router>
					<Switch>
						<Route path="/portfolio">
							<Portfolio/>
						</Route>

						<Route path="/contact">
							<Contact/>
						</Route>
						
						<Route path="/about">
							<About/>
						</Route>

						<Route path="/">
							<Home/>
						</Route>

					</Switch>
				</Router>
				<Footer className="footer w-100"/>
			</div>
		</div>
	);
}

export default App;
