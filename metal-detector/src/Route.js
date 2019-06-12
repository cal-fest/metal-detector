import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Favorites from './Favorites';
import Login from './Login';
import Signout from './Signout';
import Signup from './Signup'
import './App.css';
class Root extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path="/" component={App} />
						<Route exact path="/myfavorites" component={Favorites} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signout" component={Signout} />
						<Route exact path="/signup" component={Signup} />
					</Switch>
				</Router>
			</div>
			/* <div className="navbar">
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
			<Link to={{
				pathname: '/myfavorites',
				state: {
					verified: false
				}
			}}>Favorites</Link>
			<Link to="/signout">Signout</Link>
		</div> */
		)
	}
}

export default Root;