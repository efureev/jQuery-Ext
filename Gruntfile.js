module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), // the package file to use

		uglify: {
			options: {
				sourceMap: true
			},
			files: {
				expand: true,
				flatten: true,
				src: 'src/*.js',
				dest: 'dist',
				ext: '.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};
