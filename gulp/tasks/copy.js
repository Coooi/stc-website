'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('copy:html', function () {

  return gulp.src('./app/views/**/*')
        .pipe(gulp.dest('./public/views/'));

});

gulp.task('copy:videos', function () {

  return gulp.src('./app/videos/*')
        .pipe(gulp.dest('./public/assets/videos/'));

});

gulp.task('copy:fonts', function () {

  return gulp.src([
        'bower_components/bootstrap-sass/assets/fonts/bootstrap/*',
    ])
    .pipe(gulp.dest('./public/assets/fonts/bootstrap'));

});

gulp.task('copy:font-awesome', function () {

    return gulp.src([
        'bower_components/font-awesome/fonts/*',
    ])
        .pipe(gulp.dest('./public/assets/fonts/'));

});

gulp.task('copy:material-fonts', function () {

  return gulp.src([
        'bower_components/bootstrap-material-design/dist/fonts/*'
    ])
    .pipe(gulp.dest('./public/assets/fonts/'));

});

gulp.task('copy:flexslider-fonts', function () {

  return gulp.src([
        'bower_components/flexslider/fonts/*'
    ])
    .pipe(gulp.dest('./public/assets/css/fonts/'));

});

 
gulp.task('copy:imagemin', function () {
    return gulp.src('app/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./public/assets/images/'));
});

// gulp.task('copy:images', function () {

//  return gulp.src('./app/images/*')
//      .pipe(gulp.dest('./public/images/'));

// });
