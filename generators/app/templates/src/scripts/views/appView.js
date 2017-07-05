import React from 'react'
import LoginPage from './loginPage'
import HomePage from './homePage'
import Header from './header'
import STORE from '../store'


const AppView = React.createClass({
	 getInitialState: function() {
	 	return STORE.getData()
	 },

	 componentWillMount: function() {
	 	this['LoginPage'] = LoginPage
	 	this['HomePage'] = HomePage

	 	STORE.on('change', ()=>{
	 		this.setState(STORE.getData())
	 	})
	 },

	 render: function() {
	 	
	 	return (
	 		<div className='app-view' >
	 			<Header />
	 			{React.createElement(this[this.props.page], this.props)}
	 		</div>
	 	)
 	}
})

export default AppView