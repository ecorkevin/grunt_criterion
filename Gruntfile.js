module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['*.js'],
      options: {
        reporter: 'default',
        reporterOutput: 'log.json',
        '-W117': true,
        '-W099': true
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
    watch: {
      scripts: {
        files: ['*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
    },
  });
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('b', ['beautify']);
  grunt.registerTask('c', ['copyright']);
  grunt.registerTask('w', ['watch']);
};