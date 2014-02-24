module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'js/*.js'],
      options: {
        jshintrc: '.jshintrc',
      }
    },
    copy: {
      main: {
        src: 'index.html',
        dest: 'dest/index.html',
        options: {
          process: function (content) {
            // Remove single normalize
            content = content.replace('<link rel="stylesheet" href="css/normalize.css">','');

            // Replace main.css to styles.min.css
            content = content.replace('main.css', 'styles.min.css');

            // Remove jQuery
            content = content.replace('<script src="js/vendor/jquery-1.11.0.min.js"></script>', '');

            // Replace main.js to scripts.min.js
            content = content.replace('main.js', 'scripts.min.js');

            return content;
          }
        }
      }
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
          'dest/js/vendor/html5shiv.js': 'js/vendor/html5shiv.js',
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
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'cssmin', 'uglify', 'imagemin', 'jshint']);

};
