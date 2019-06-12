import React from 'react';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			verified: false,
			createUser: false,
		}
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
		this.verifyLogin = this.verifyLogin.bind(this);
		this.redirectToSignup = this.redirectToSignup.bind(this);
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
		if (username.length === 0 || password.length === 0) {
			alert('Please enter a username and password!')
		}
		if (username === 'alyvia' && password === "password") {
			this.setState({
				verified: true
			})
		}
	};

	redirectToSignup() {
		this.setState({
			createUser: true
		})
	}

	render() {
		if (this.state.verified) {
			return <Redirect to={{
				pathname: "/myfavorites",
				state: {
					username: this.state.username,
					verified: true
				}
			}} />
		}
		if (this.state.createUser) {
			return <Redirect to="/signup" />
		}
		return (
			< div >
				<div className="login">
					<form onSubmit={this.handleSubmit}>
						<label>Username</label>
						<input id="username" type="text" placeholder="user" onChange={this.handleUserChange}></input>
						<label>Password</label>
						<input id="password" type="password" placeholder="password" onChange={this.handlePassChange}></input>
					</form>
					<button id="loginButton" onClick={(e) => { e.preventDefault(); this.verifyLogin(this.state.username, this.state.password) }}>Login</button>
					<button id="signupButton" onClick={(e) => { e.preventDefault(); this.redirectToSignup() }}>Signup</button>
				</div>
			</div >
		)
	}
}

export default Login;