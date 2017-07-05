let Router = require('express').Router;
const <%= modelLower %>Router = Router()

let <%= modelName %> = require('../../db/schemas/<%= modelLower %>Schema.js').<%= modelName %>

<%= modelLower %>Router
	.get(`/<%= modelLower %>`, function(req, res){
		<%= modelName %>.find(req.query , "-password", function(err, results){
			if(err) return res.json(err) 
		res.json(results)
		})
	})

	.get(`/<%= modelLower %>/:_id`, function(req, res){
		<%= modelName %>.findById(req.params._id, "-password", function(err, record){
			if(err || !record ) return res.json(err) 
			res.json(record)
		})
	})

	.post(`/<%= modelLower %>`, function(req,res) {
		let newRecord = new <%= modelName %>(req.body)
		newRecord.save(function(err) {
			if (err) {
				console.log(err)
				res.status(500).send(err)
			}
			else {  
				res.json(newRecord)
			}
		})
	})

	.put(`/<%= modelLower %>/:_id`, function(req, res){
		<%= modelName %>.findByIdAndUpdate(req.params._id, req.body, function(err, record){
			if (err) {
				res.status(500).send(err)
			}
			else if (!record) {
				res.status(400).send(`no record found with that id`)
			}
			else {
				res.json(req.body)
			}
		})
	})

	.delete(`/<%= modelLower %>/:_id`, function(req, res){
		<%= modelName %>.remove({ _id: req.params._id}, (err) => {
			if(err) return res.json(err)
			res.json({
				msg: `record ${req.params._id} successfully deleted`,
				_id: req.params._id
			})
		})
	})

module.exports = <%= modelLower %>Router
