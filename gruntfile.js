module.exports = function(grunt) {

   grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    	jshint : {
    		options: {
		        reporter: require('jshint-stylish')
		    },

		    main: [
		        'Gruntfile.js', 'src/init/*.js'
		    ]
    	},

    	uglify : {
    		build: {
    			options : {
		    		mangle : true,
		    		beautify : false,
		    		compress: true,
		    		banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
		    	},
		        files: {
		            'dist/js/init.min.js' : ['src/js/init/*.js']
		        }
		    },

		    dev : {
		    	options : {
		    		mangle : true,
		    		beautify : true,
		    		banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
		    	},

		    	files : {
		            'dist/js/init.min.js' : ['src/js/init/*.js']
		        }
		    }
    	},

    	sass : {
		    dev: {
		        options: {
		            outputStyle: 'nested',
		            sourceMap: true,
		            require: 'susy'
		        },
		        files: {
		        	'dist/css/mainstyle.css' : 'src/scss/mainstyle/**/*.scss'
		        }
		    },

		    print: {
		    	options: {
		    		outputStyle: 'nested',
		            sourceMap: true,
		            require: 'susy'
		    	},

		    	files: {
		    		'dist/css/print.css' : 'src/scss/mainstyle/print.scss'
		    	}
		    },

		    build: {
		        options: {
		            outputStyle: 'compressed',
		            sourceMap: true,
		            require: 'susy'
		        },
		        files: {
		        	'dist/css/mainstyle.css' : 'src/scss/mainstyle/**/*.scss'
		        }
		    }
    	}, 

    	autoprefixer: {
		    options: {
		        browsers: ['last 3 versions', 'ie 8', 'ie 9', '> 1%']
		    },
		    main: {
		        expand: true,
		        flatten: true,
		        remove: false,
		        src: 'dist/css/*.css',
		        dest: 'dist/css/'
		    }
		},

		imagemin: {

			all:{
				options: {
	            	progressive: true
	        	},
        		files: [{
			        expand: true,
			        cache: false,               
			        cwd: 'src/',                  
			        src: ['images/*.{png,jpg,gif}'],   
			        dest: 'dist/'  
			    }]

			}
			
		},

		cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1,
		    keepSpecialComments: 0 
		  },
		  target: {
		    files: {
		      'dist/css/mainstyle.css': ['dist/css/*.css']
		    }
		  }
		},

		notify: {
		    watch:{
		        options:{
		            title: ' "CSS Files built" ',
		            message: ' "watch task complete" ',
		            duration: 1
		        }
		    },
		    watchjs:{
		        options:{
		            title: ' "JS Files built" ',
		            message: ' "watch task complete" ',
		            duration: 1
		        }
		    }
		},

		 concat: {
		    options: {
		      separator: ';',
		      sourceMap: true
		    },
		    dist: {
		      src: ['dist/css/*.css', '!dist/css/print.css'],
		      dest: 'dist/css/mainstyle.css',
		    },
		  },

		copy: {
		  	main: {
			    files: [
			      {expand: true, flatten:true, src: ['src/fonts/*'], dest: 'dist/fonts', filter: 'isFile'},
			      {expand:true, flatten:true, src: ['src/scss/vendor/*'], dest:'dist/css/vendor', filter:'isFile'},
			      {expand:true, flatten:true, src:['src/images/*.svg'], dest: 'dist/images', filter:'isFile'},
			      {expand:true, flatten:true, src: ['src/js/vendor/*'], dest: 'dist/js/vendor', filter: 'isFile'}
			    ],
		  	},

		  	css: {
		  		 files: [
			      {expand:true, flatten:true, src: ['src/scss/vendor/*'], dest:'dist/css/vendor', filter:'isFile'},
			    ],
		  	},

		  	js: {
		  		files: [
		  			{expand:true, flatten:true, src: ['src/js/vendor/*'], dest: 'dist/js/vendor', filter: 'isFile'}
		  		],
		  	}
		},

		clean: {
			dev: ["dist/css/*", "!dist/css/mainstyle.css", "!dist/css/*.map", "!dist/css/print.css", "!dist/css/vendor"],

			build: ["dist/css/*", "!dist/css/mainstyle.css", "!dist/css/print.css", "!dist/css/vendor"]
		},

		concurrent: {
			target1: ['jshint', 'uglify:dev', 'sass:dev',  'imagemin', 'copy:main',],
			target2: ['jshint', 'uglify:build', 'sass:build',  'imagemin', 'copy:main']
		},

    	watch : {

    		gruntfile: {
    			files:[
    				'gruntfile.js'
    			],
    			tasks:[
    				'jshint',
    				'notify:watchjs'
    			]
    		},
    		
		    js: {
		        files: [
		            'src/js/**/*.js'
		        ],
		        tasks: [
		            'jshint',
		            'uglify:dev',
		            'copy:js',
		            'notify:watchjs'
		        ]
		    },

		    css: {
		        files: [
		            'src/scss/**/*.scss', '!src/scss/mainstyle/print.scss'
		        ],
		        tasks: [
		            'sass:dev',
		            'copy:css',
		            'concat',
		            'clean:dev',
		            'notify:watch'
		        ],
		        options: {
			        spawn: false,
			        livereload: true,
			    }
		    },

		    print: {
		    	files: [
		    		'src/scss/mainstyle/print.scss'
		    	],

		    	tasks: [
		    		'sass:print'
		    	],

		    	options: {
		    		spawn: false,
			        livereload: true,
		    	}
		    }
    	}
	});
	
	//extra
	require('time-grunt')(grunt); //adds load time

   //load grunt
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks("grunt-modernizr");
	

	//register task
	grunt.registerTask('dev',['concurrent:target1', 'uglify:dev', 'concat', 'clean:build', 'autoprefixer']);
	grunt.registerTask('build', ['concurrent:target2', 'uglify:build', 'cssmin', 'clean:build', 'autoprefixer']);

};