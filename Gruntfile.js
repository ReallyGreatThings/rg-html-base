module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'js/*.js'],
      options: {
        jshintrc: '.jshintrc',
      }
    },
    watch: {
      css: {
        files: ['css/*.css', 'js/*.js', 'img/*'],
        tasks: ['cssmin', 'uglify', 'imagemin', 'jshint']
      },
    },
    cssmin: {
      combine: {
        files: {
          'dest/css/styles.min.css': ['css/normalize.css', 'css/main.css']
        }
      }
    },
    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        }
      },
      my_target: {
        files: {
          'dest/js/html5shiv.js': 'js/vendor/html5shiv.js',
          'dest/js/scripts.min.js': ['js/vendor/jquery-1.11.0.min.js', 'js/main.js']
        }
      }
    },
    imagemin: {
      options: {
        optimizationLevel: 3
      },
      dynamic: {
        files: [{
          expand: true,
          src: ['img/*.{png,jpg,gif}'],
          dest: 'dest/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
