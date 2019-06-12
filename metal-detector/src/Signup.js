import React, { Component } from 'react';
const axios = require('axios');

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			username: "",
			password: "",
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
	};

	render() {
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