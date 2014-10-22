module.exports = function(grunt) {
// configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/build',
                src: ['*.css', '!*.min.css'],
                dest: 'css/build/min',
                ext: '.min.css'
            }
        },
        less: {
            src: {
                expand: true,
                cwd:    "css/source",
                src:    "screen.less",
                dest:   "css/build",
                ext:    ".css"
            }
        }
    });
// load plug-in
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
// default task when command "grunt" is execute
    grunt.registerTask('default', ['less','cssmin']);
};