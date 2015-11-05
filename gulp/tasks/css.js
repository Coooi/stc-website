'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    concat        = require('gulp-concat'),
    minifyCSS     = require('gulp-minify-css'),
    rename        = require('gulp-rename'),
    plumber       = require('gulp-plumber'),
    sassbeautify  = require('gulp-sassbeautify');

gulp.task('sass', function () {
    gulp.src([
        'app/sass/**/*.scss',
        'node_modules/bootstrap-sass/assets/stylesheets/_bootstrap-compass.scss',
        'bower_components/bootstrap-material-design/dist/css/material.min.css',
        'bower_components/bootstrap-material-design/dist/css/ripples.min.css',
        'bower_components/bootstrap-material-design/dist/css/roboto.min.css',
        'bower_components/animate.css/animate.min.css',
        'bower_components/Swiper/dist/css/swiper.min.css'
        ])
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(concat('stc.css'))
        .pipe(gulp.dest('app/temp/css/'))
        .pipe(minifyCSS())
        .pipe(rename('stc.min.css'))
        .pipe(gulp.dest('public/assets/css/'));
});