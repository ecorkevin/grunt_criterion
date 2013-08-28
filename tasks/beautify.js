/*jshint globalstrict: true*/
/*global module, require*/
'use strict';
module.exports = function(grunt) {
  grunt.registerMultiTask('beautify', 'Runs JS Beautify', function() {
    var beautify = require('js-beautify').js_beautify,
      fs = require('fs');
    for (var i = 0; i < this.files.length; i++) {
      var data = fs.readFileSync(this.files[i].dest, 'utf8');
      var newdata = (beautify(data, {
        indent_size: 2,
        indent_char: " ",
        preserve_newlines: true,
        max_preserve_newlines: 2,
        wrap_line_length: 80
      }));
      fs.writeFileSync(this.files[i].dest, newdata);
    }
  });
};