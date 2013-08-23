'use strict';
module.exports = function(grunt) {
  var exec = require('child_process').exec;
  var fs = require('fs');
  grunt.registerMultiTask('writeFilesforCoverage', 'writes test file with list of js files in directory', function() {
    fs.writeFileSync('test.js', '//TEST FILE\n\n');
    for (var i = 0; i < this.files.length; i++) {
      var data = fs.readFileSync(this.files[i].dest, 'utf8');
      var newdata = "require('./" + this.files[i].dest + "');\n";
      fs.appendFileSync('test.js', newdata);
    }
  })
  grunt.registerTask('runCoverage', 'Generates coverage report on reported js files', function() {
    var done = this.async();
    exec('istanbul cover test.js', function(error, stdout, stderr) {
      fs.unlink('test.js', function() {
        done();
      });
    });
  });
  grunt.registerTask('mochaCoverageReport', 'Generates coverage report, based on "mocha test"', function() {
    var done = this.async();
    exec('istanbul cover node_modules/mocha/bin/_mocha --ui tdd', function(error, stdout, stderr) {
      console.log(error);
      done();
    });
  });
};