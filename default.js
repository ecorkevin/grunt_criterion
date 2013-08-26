/*jshint globalstrict: true*/
"use strict";
module.exports = {
  reporter: function(results, data, opts) {
    process.stdout.write('{"report":' + JSON.stringify(results, null, 2) + '}');
  }
};