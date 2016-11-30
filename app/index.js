var generators = require('yeoman-generator');
var mkdirp = require('mkdirp')
var validateName = require('./validateVarName')

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);
  },

	prompting: function() {
	 
		return this.prompt([
			{
				type    : 'input',
				name    : 'name',
				message : 'Your project name',
				default : 'forgotToNameYourProject'
			}
		]).then(function (answers) {
			if (validateName(answers.name)) {
				this.appName = answers.name;
				this.appRoot = `${this.destinationRoot()}/${this.appName}`
			}
			else {
				throw new Error('your app name must also be a valid javascript variable name. see https://online.theironyard.com/paths/430/units/2466/lessons/9866 for more information on valid variable names, then run `yo maestro` again and try a different name.')
			}
		}.bind(this));
	},

	writing: function() {
		mkdirp(this.appRoot, function(err,stuff) {
			if (err) console.log(err)
		})
		this.directory(`${this.sourceRoot()}`,this.appRoot)

		var paths = ['package.json','server.js','README.md','src/scripts/app.js']
		paths.forEach(
			(filepath)=>{
				this.fs.copyTpl(
					this.templatePath(filepath),
					this.destinationPath(`${this.appRoot}/${filepath}`),
					{
						appName: this.appName
					}
				)
			})


	}
});
