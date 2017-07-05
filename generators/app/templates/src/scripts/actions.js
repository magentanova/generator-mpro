import STORE from './store'
import User from './models/userModel'

const ACTIONS = {
	logOneIn: function(email,password) {
		User.login(email,password).then(
			(resp) => {
				console.log(resp)
				alert('good job loggin in!')
				location.hash = 'home'
			}),
			(err) => {
				console.log(err)
				alert('problem logging you in')
			}
	},

	signOneUp: function(dataObj) {
		User.register(dataObj).then(
			(resp) => {
				console.log(resp)
				ACTIONS.logOneIn(dataObj.email,dataObj.password)
			}),
			(err) => {
				console.log(err)
				alert('problem signing you up')
			}

	}
}

export default ACTIONS