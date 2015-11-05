'use strict';

var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function () {

  runSequence(
      'clean', 
      'sass',
      // 'copy:html',
      'ejs',
      'copy:fonts',
      'copy:material-fonts',
      'copy:font-awesome',
      'copy:flexslider-fonts',
      'copy:imagemin',
      'scripts'
    );

});