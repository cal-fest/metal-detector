import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			verified: false
		}
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
		this.verifyLogin = this.verifyLogin.bind(this);
	}

	handleUserChange(event) {
		this.setState({
			username: event.target.value
		})
	};

	handlePassChange(event) {
		this.setState({
			password: event.target.value
		})
	};
	//in verifyLogin, I will send a post request to my server attaching username and password, depnding on response from server route to Favorites
	verifyLogin(username, password) {
		if (username === 'alyvia' && password === "password") {
			this.setState({
				verified: true
			})
		}
	}

	render() {
		if (this.state.verified === true) {
			return <Redirect to={{
				pathname: "/myfavorites",
				state: {
					username: this.state.username,
					verified: true
				}
			}} />
		}
		return (
			< div >
				<div className="Login">
					<form onSubmit={this.handleSubmit}>
						<label>Username</label>
						<input id="username" type="text" placeholder="user" onChange={this.handleUserChange}></input>
						<label>Password</label>
						<input id="password" type="password" placeholder="password" onChange={this.handlePassChange}></input>
					</form>
					<button id="loginButton" onClick={(e) => { e.preventDefault(); this.verifyLogin(this.state.username, this.state.password) }}>Login</button>
				</div>
			</div >
		)
	}
}

export default Login;