const gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssVars	= require('postcss-simple-vars'),
cssImport = require('postcss-import'),
cssNested = require('postcss-nested'),
autoprefixer = require('autoprefixer'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba'),
colorFunction = require("postcss-color-function");


gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssVars, cssNested, hexrgba, colorFunction, autoprefixer]))
		.on('error', function(err){
			console.log(err.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});
