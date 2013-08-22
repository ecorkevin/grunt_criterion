module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: {
        all: ['*.js'],
        options: {
          reporter: 'default',
          reporterOutput: 'log.json',
          '-W117': true,
          '-W099': true
        },
      },
    },
    beautify: {
      all: {
        files: [{
          expand: true,
          src: ['*.js']
        }],
      },
    },
    copyright: {
      all: {
        files: [{
          expand: true,
          src: ['*.js']
        }],
      },
    },
  });
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('b', ['beautify']);
  grunt.registerTask('c', ['copyright']);
};