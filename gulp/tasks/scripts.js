var gulp    = require('gulp'),
    vendor  = require('gulp-concat-vendor'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat'),
    rename  = require('gulp-rename'),
    jshint  = require('gulp-jshint');

var releaseScripts = ['app/js/*'];

var vendorScripts = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
  'bower_components/angular/angular.min.js',
  'bower_components/angular-ui-router/release/angular-ui-router.min.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  'bower_components/bootstrap-material-design/dist/js/material.min.js',
  'bower_components/bootstrap-material-design/dist/js/ripples.min.js',
  'bower_components/flexslider/jquery.flexslider-min.js',
  'bower_components/imagesloaded/imagesloaded.pkgd.min.js'
];

gulp.task('concat-vendor', function() {
  gulp.src(vendorScripts)
  .pipe(vendor('vendor.min.js'))
  .pipe(gulp.dest('public/assets/js/'));  
});

gulp.task('uglify', function() {
  return gulp.src(releaseScripts)
    .pipe(concat('stc.min.js'))
    .pipe(gulp.dest('app/temp/js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('public/assets/js/'));
});

gulp.task('jshint', function() {
  return gulp.src(releaseScripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', ['jshint', 'concat-vendor', 'uglify']);

