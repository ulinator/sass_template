'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({includePaths: ['app/css/']})) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css/'))
});

gulp.task('minify-css',function() {
  return gulp.src('app/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy-html', function() {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
});

gulp.task('default', [ 'copy-html', 'sass', 'minify-css' ]);