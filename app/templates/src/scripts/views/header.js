import React from 'react'

const Header = React.createClass({
	 render: function() {
	 	return (
	 		<div className='header' >
	 			<h1>Todoloo</h1>
	 			<NavBar />
	 		</div>
	 	)
 	}
})

const NavBar = React.createClass({
	render: function() {
		return (
			<div className='nav-bar'>	
				<a href='#home'>home</a>
			</div>
			)
	}
})

export default Header
