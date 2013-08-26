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
          src: ['*.js', 'tasks/*.js']
        }],
      },
    },
    copyright: {
      all: {
        files: [{
          expand: true,
          src: ['*.js', '-web.js']
        }],
      },
    },
    watch: {
      scripts: {
        files: ['*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    },
    writeFilesforCoverage: {
      all: {
        files: [{
          expand: true,
          src: ['*.js']
        }],
      },
    },
    prompt: {
      target: {
        options: {
          questions: [{
            config: 'jsduck.main.src', // arbitray name or config for any other grunt task
            type: 'input', // list, checkbox, confirm, input, password
            message: 'comma separated list of paths to document (no spaces)',
            'default': 'default', // default value if nothing is entered
            choices: 'Array|Function(answers)',
            filter: function(value) {
              var n = value.split(",");
              return n;
            }
          }]
        }
      },
    },
    jsduck: {
      main: {
        // source paths with your code
        src: [''],
        // docs output dir
        dest: 'docs',
        // extra options
        options: {
          'builtin-classes': true,
          'external': ['XMLHttpRequest']
        },
      },
    },
  });
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsduck');
  grunt.loadNpmTasks('grunt-prompt');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('b', ['beautify']);
  grunt.registerTask('c', ['copyright']);
  grunt.registerTask('w', ['watch']);
  grunt.registerTask('cover', ['writeFilesforCoverage', 'runCoverage']);
  grunt.registerTask('mocha', ['mochaCoverageReport']);
  grunt.registerTask('duck', ['prompt', 'jsduck']);
};