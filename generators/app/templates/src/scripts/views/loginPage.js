import React from 'react'
import ACTIONS from '../actions'

const LoginPage = React.createClass({
	 render: function() {
	 	return (
	 		<div className={'login-page'} >
	 			<LoginBox />
	 			<SignUpBox />
	 		</div>
	 	)
 	}
})

const LoginBox = React.createClass({
	_handleLogIn: function(e) {
		e.preventDefault()
		ACTIONS.logOneIn(e.target.email.value,e.target.password.value)
	},

	 render: function() {
	 	return (
	 		<div className={'login-box'} >
	 			<form onSubmit={this._handleLogIn} className='login-form'>
	 				<h2>Log In</h2>
	 				<input name="email" placeholder="enter your email" />
	 				<input name="password" placeholder="enter your password" />
	 				<button type="submit">submit</button>
	 			</form>
	 		</div>
	 	)
 	}
})


const SignUpBox = React.createClass({
	_handleSignUp: function(e) {
		e.preventDefault()
		ACTIONS.signOneUp({
			email: e.target.email.value,
			password: e.target.password.value
		})
	},

	 render: function() {
	 	return (
	 		<div className={'login-box'} >
	 			<form onSubmit={this._handleSignUp} className='login-form'>
	 				<h2>Sign Up</h2>
	 				<input name="email" placeholder="enter your email" />
	 				<input name="password" placeholder="enter your password" />
	 				<button type="submit">submit</button>
	 			</form>
	 		</div>
	 	)
 	}
 })

export default LoginPage
