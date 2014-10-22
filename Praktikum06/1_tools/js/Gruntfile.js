module.exports = function(grunt) {
// configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            minify: {
                expand: true,
                cwd: '../css',
                src: ['*.css', '!*.min.css'],
                dest: '../css',
                ext: '.min.css'
            }
        }
    });
// load plug-in
    grunt.loadNpmTasks('grunt-contrib-cssmin');
// default task when command "grunt" is executed
    grunt.registerTask('default', ['cssmin']);
};