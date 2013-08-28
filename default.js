/*jshint globalstrict: true*/
/*global module*/
/*global console*/
"use strict";
module.exports = {
  reporter: function(results, data, opts) {
    console.log('{"report":' + JSON.stringify(results, null, 2) + '}');
  }
};