'use strict';

var gulp  = require('gulp');

gulp.task('watch:html', function() {
  gulp.watch('./app/views/**/*', ['ejs']);
});

gulp.task('watch:sass', function() {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('watch:scripts', function() {
  gulp.watch('./app/js/**/*.js', ['scripts']);
});