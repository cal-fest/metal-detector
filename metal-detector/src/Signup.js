import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
const axios = require('axios');

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			username: "",
			password: "",
			created: false,
		}
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
		this.createAccount = this.createAccount.bind(this);
	}

	handleFirstNameChange(event) {
		this.setState({
			firstName: event.target.value
		})
	};

	handleLastNameChange(event) {
		this.setState({
			lastName: event.target.value
		})
	};

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

	createAccount() {
		const { firstName, lastName, username, password } = this.state;
		if (!firstName.length || !lastName.length || !username.length || !password.length) {
			window.alert('One of the fields you entered is incorrect');
		};
		axios('http://localhost:8080/', {
			method: 'POST',
			data: {
				first_name: firstName,
				last_name: lastName,
				username: username,
				password: password
			}
		})
			.then(res => {
				if (res.data === true) {
					this.setState({
						created: true
					})
				} else {
					window.alert('We apologize something went wrong! Please sign up again')
				}
			})
			.catch(err => {
				console.log('err in axios post', err)
			})
	};

	render() {
		if (this.state.created) {
			return <Redirect to={{
				pathname: "/myfavorites",
				state: {
					username: this.state.username,
					verified: true
				}
			}} />
		}
		return (
			<div>
				<div className="signup">
					<form onSubmit={this.handleSubmit}>
						<label>First Name</label>
						<input id="firstName" type="text" placeholder="first name" onChange={this.handleFirstNameChange}></input>
						<label>Last Name</label>
						<input id="lastName" type="text" placeholder="last name" onChange={this.handleLastNameChange}></input>
						<label>Username</label>
						<input id="username" type="text" placeholder="user" onChange={this.handleUserChange}></input>
						<label>Password</label>
						<input id="password" type="password" placeholder="password" onChange={this.handlePassChange}></input>
					</form>
					<button id="createAccount" onClick={(e) => { e.preventDefault(); this.createAccount(this.state) }}>Create Account</button>
				</div>
			</div>
		)
	}
}

export default Signup