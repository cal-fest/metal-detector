import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Favorites from './Favorites';
import Login from './Login';
import Signout from './Signout';
import Signup from './Signup'
import './App.css';
import Nav from './Nav';

const Root = () => {
	return (
		<div>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/myfavorites" component={Favorites} />
					<Route path="/login" component={Login} />
					<Route path="/signout" component={Signout} />
					<Route path="/signup" component={Signup} />
				</Switch>
			</Router>
		</div>
	)
}

export default Root;