module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['*.js'],
      options: {
        force: true,
        reporter: 'default',
        reporterOutput: 'log.json'
      }
    },
    beautify: {
      dynamic_mappings: {
        files: [{
          expand: true,
          src: ['*.js']
        }]
      }
    }
  });
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('b', ['beautify']);
}