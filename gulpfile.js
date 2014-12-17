var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	path = require('path');


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('bootstrap-less', function() {
  return gulp.src('bower_components/bootstrap/less/bootstrap.less')
  	.pipe(less({
  		path: [ path.join(__dirname, 'less', 'includes')]
  	}))
  	.pipe(gulp.dest('public/css'))
});

gulp.task('bootstrap-js', function () {
	return gulp.src('bower_components/bootstrap/dist/js/bootstrap.js')
	.pipe(gulp.dest('public/js'))
});

gulp.task('jquery', function () {
	return gulp.src('bower_components/jquery/dist/jquery.js')
	.pipe(gulp.dest('public/js'))
});

gulp.task('vendor-js', function () {
	return gulp.src(['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'])
	.pipe(concat('vendor.js'))
	.pipe(uglify())
	.pipe(gulp.dest('public/js'))
});

gulp.task('less', function () {
  return gulp.src('less/*.less')
  	.pipe(less({
  		path: [ path.join(__dirname, 'less', 'includes')]
  	}))
  	.pipe(gulp.dest('public/css'))
});

gulp.task('js', function () {
	return gulp.src('js/*js')
	.pipe(concat('main.js'))
	.pipe(gulp.dest('public/js'))
})

gulp.task('build', ['bootstrap-less', 'vendor-js', 'less', 'js']
);