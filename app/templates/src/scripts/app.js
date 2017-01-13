//libraries 
import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

//modules
import AppView from './views/appView'

const app = function() {
  const AppRouter = Backbone.Router.extend({
  	routes: {
  		"home": "renderTestView",
  		"*default": "redirect"
  	},

  	renderTestView: function() {
  		ReactDOM.render(<AppView />, document.querySelector('.container'))
  	},

  	redirect: function() {
  		location.hash = "home"
  	}
  })

}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..