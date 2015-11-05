var gulp    = require('gulp'), 
    nodemon = require('gulp-nodemon'),
    jshint  = require('gulp-jshint'),
    nodeInspector = require('gulp-node-inspector');
 
gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint())
});
 
gulp.task('nodemon', function () {
  nodemon({ script: 'server.js'
          , ignore: ['ignored.js']})
    .on('restart', function () {
      console.log('restarted!');
    })
});

gulp.task('debug', function() {

    gulp.src([])
        .pipe(nodeInspector());
});