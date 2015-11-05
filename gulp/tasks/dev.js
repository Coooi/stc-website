'use strict';

var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('dev', function () {

  runSequence(
    'build', 
    'watch:html',
    'watch:sass',
    'watch:scripts'
  )

});

gulp.task('run', ['dev', 'nodemon']);

//gulp.task('run', ['dev', 'debug', 'mongod']);