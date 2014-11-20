module.exports = function(grunt) {

    // CONFIG 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {                               
            dynamic: {                            
                files: [{
                    expand: true,                  
                    cwd: 'DEV/images/',             
                    src: ['**/*.{png,jpg,gif}'],   
                    dest: 'BUILD/images/'            
                }]
            }
        },

        concat: {
            dist: {
                src: [
                    'DEV/js/libs/angular.js',
                    'DEV/js/libs/angular-route.js',
                    'DEV/app/app.js',
                    'DEV/app/global/*.js',
                    'DEV/app/global/*/*.js',
                    'DEV/app/global/*/*/*.js',
                    'DEV/app/templates/*.js',
                    'DEV/app/templates/*/*.js',
                    'DEV/app/templates/*/*/*.js'
                ],
                dest: 'DEV/js/main.js',
            }
        },

        uglify: {
            build: {
                src: 'DEV/js/main.js',
                dest: 'BUILD/js/main.min.js'
            }
        },

        watch: {
            scripts: {
                files: [
                    'DEV/js/libs/angular.js',
                    'DEV/js/libs/angular-route.js',
                    'DEV/app/app.js',
                    'DEV/app/global/*',
                    'DEV/app/global/*/*',
                    'DEV/app/global/*/*/*',
                    'DEV/app/templates/*',
                    'DEV/app/templates/*/*',
                    'DEV/app/templates/*/*/*'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                },
            },

            css: {
                files: [
                    'DEV/app/*.scss',
                    'DEV/app/*/*.scss',
                    'DEV/app/*/*/*.scss',
                    'DEV/app/*/*/*/*.scss'
                ],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            },

            html: {
                files:[
                    'DEV/app/*',
                    'DEV/app/*/*',
                    'DEV/app/*/*/*',
                    'DEV/app/*/*/*/*'
                ],
                tasks: ['copy']
            },

            livereload: {
                options: { livereload: true },
                files: [
                    'BUILD/css/*.css',
                    'DEV/app/*',
                    'DEV/app/*/*',
                    'DEV/app/*/*/*',
                    'DEV/app/*/*/*/*'
                    ],
            }
        },

        compass: {                  
            dist: {                
                options: {          
                    sassDir: 'DEV/app',
                    cssDir: 'BUILD/css',
                    noLineComments : true,
                    environment: 'development'
                }
            }
        },

        copy: {
            main: {
                expand: true, 
                flatten: true,
                cwd: 'DEV/app/', 
                src: [
                    '**.html',
                    '*/*.html',
                    '*/*/*.html',
                    '*/*/*/*.html'
                    ], 
                dest: 'BUILD/ng-views/', 
                filter: 'isFile'
            },
        },

        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        }

    });

    // PACKAGES
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // RUN GRUNT 
    grunt.registerTask('default', ['concat', 'uglify', 'express:dev', 'watch', 'compass', 'copy']);

};