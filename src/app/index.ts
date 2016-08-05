/* tslint:disable:no-var-requires */
const generators = require("yeoman-generator");

module.exports = generators.Base.extend({
  install: {
    npm: function () {
      this.npmInstall();
    },
  },
  writing: function () {
    this.fs.copy(
      this.templatePath("**/*"),
      this.destinationPath(".")
    );
    this.fs.move(
      this.destinationPath("_gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.move(
      this.destinationPath("_npmignore"),
      this.destinationPath(".npmignore")
    );
  },
});
