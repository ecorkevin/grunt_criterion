'use strict';
module.exports = function(grunt) {
  grunt.registerMultiTask('copyright', 'Adds sample comment string', function() {
    var fs = require('fs');
    for (var i = 0; i < this.files.length; i++) {
      var data = fs.readFileSync(this.files[i].dest, 'utf8');
      var search = data.search('//THIS IS A NEW COMMENT');
      if (search == -1) {
        var comment = '//THIS IS A NEW COMMENT\n' + data;
        var newdata = (comment);
        fs.writeFileSync(this.files[i].dest, newdata);
      } else {
        console.log("VALID COPYRIGHT");
      }
    }
  });
}