import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import Nav from './Nav';

class Login extends Component {
	state = {
		username: '',
		password: '',
		verified: false,
		createUser: false,
	}
	handleUserChange = this.handleUserChange.bind(this);
	handlePassChange = this.handlePassChange.bind(this);
	verifyLogin = this.verifyLogin.bind(this);
	redirectToSignup = this.redirectToSignup.bind(this);

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
		axios('http://localhost:8080/verifylogin', {
			method: 'POST',
			data: {
				username: username,
				password: password
			}
		})
			.then(res => {
				console.log('res', res)
				if (res.data === true) {
					this.setState({
						verified: true
					})
				} else {
					window.alert('Username or Password Incorrect')
				}
			})
			.catch(err => {
				console.log('err in axios post', err)
			})
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
				<div className="login middle">
					<form onSubmit={this.handleSubmit}>
						<label>Username </label>
						<input id="username" style={{
							display: 'inline-block', height: '30px', width: '300px'
						}} type="text" placeholder="Who are you?!" onChange={this.handleUserChange} autofocus="true"></input>
						< br />
						<label>Password </label>
						<input id="password" style={{ display: 'inline-block', width: '300px', height: '30px', }} type="password" placeholder="Why are you here?" onChange={this.handlePassChange} ></input>
						<br />
						<br />
						<button id="loginButton" style={{ display: 'inline-block', width: '100px', height: '30px' }} onClick={(e) => { e.preventDefault(); this.verifyLogin(this.state.username, this.state.password) }}>Login</button>
						<br />
						<button id="signupButton" style={{ display: 'inline-block', width: '100px', height: '30px' }} onClick={(e) => { e.preventDefault(); this.redirectToSignup() }}>Signup</button>
					</form>
				</div>
			</div >
		)
	}
}

export default Login;