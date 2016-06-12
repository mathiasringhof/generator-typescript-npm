const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: function () {
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath('.')
    );
  },
  install: {
    npm: function () {
      this.npmInstall();
    },
    typings: function () {
      this.runInstall('typings');
    }
  }
});