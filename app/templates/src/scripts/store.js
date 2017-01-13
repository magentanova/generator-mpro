import _ from 'underscore'
import Backbone from 'backbone'

const STORE = _.extend(Backbone.Events,{
	data: {

	},

	emitChange: function() {
		this.trigger('change')
	},

	getData: function() {
		return this.data
	},

	get: function(key) {
		return data[key]
	},

	set: function(attrs) {
		this.data = _.extend(this.data,attrs)
		this.emitChange()
	}
}

export default STORE	