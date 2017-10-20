//Gruntfile.js for marknewman.me
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//CSS: SASS to CSS compiler
		sass: {
			dist: {
				files: {
					'assets/css/main.css' : 'src/assets/css/main.scss'
				}
			}
		},

		//CSS: A generalized task with specialized components
		postcss: {
		    options: {
			    processors: [      
			        //Standardizes the order of css rules
			        require('postcss-sorting'),
			  
			        //Assigns browser specific pre-fixes
			        require('autoprefixer')()

			        //Adds hexadecimal fallback colors when rgba colors are specified 
			        //require('postcss-color-rgba-fallback')()

			        //Minify css       
			        //require('cssnano')()
			    ]
		    },
		    dist: {
			    src: 'assets/css/main.css'
		    }
		},
		
		
		//FILE: combines content source files into one file
		/*
		concat: {
		    css: {
			    src: [ 'src/assets/css/main.css' ],
			    dest: 'assets/css/bundled.css',
			    options: {
			        separator: '\n\n\n\n\n\n\n\n\n\nconcatenated from new sourcefile. see Grunfile.js'
			    }
		    },

		    js: {
			    src: [ 'src/assets/js/src.main.js' ],
			    dest: 'src/assets/js/bundled.js',
			    options: {
			        separator: '\n\n\n\n\n\n\n\n\n\nconcatenated from new sourcefile. see Grunfile.js\n'
			    }
		    }
		},
		*/
		

		//WATCH: Performs specified tasks based upon file changes
		watch: {
			css: {
				files: 'src/assets/css/main.scss',
				//tasks: ['sass']
				tasks: ['sass','postcss']
			}
		}
    });
  
	//grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.registerTask('default',['watch']);
	//grunt.registerTask('test1',['sass','concat','postcss','uglify']);
}
