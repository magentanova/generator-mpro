var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
	constructor: function () {
	// Calling the super constructor is important so our generator is correctly set up
		generators.Base.apply(this, arguments);
	},

	writing: function() {

		// This makes `appname` a required argument.
		this.argument('modelName', { type: String, required: true });
		// And you can then access it later on this way; e.g. CamelCased
		this.modelName = this.modelName[0].toUpperCase() + this.modelName.substr(1)
		this.modelLower = this.modelName.toLowerCase()
		var paths = [
			{
				file:'_schema.js',
				destDir: 'db/schemas',
				typ: 'Schema'
			},
			{
				file: '_apiRoutes.js',
				destDir: 'routes/api',
				typ: 'Router'
			}
		]
		paths.forEach((pathObj) => {
			this.fs.copyTpl(
				this.templatePath(pathObj.file),
				this.destinationPath(`${pathObj.destDir}/${this.modelLower}${pathObj.typ}.js`),
				{
					modelName: this.modelName,
					modelLower: this.modelLower
				}
			)
		})
		


	}
});
