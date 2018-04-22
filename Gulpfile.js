'use strict';

// Task Dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const connect = require('gulp-connect');

// Default task
gulp.task('default', ['css', 'pug', 'webserver']);

// CSS task, compiles SCSS into CSS in the assets directory
gulp.task('css', () => {
  gulp.src('./src/scss/styles.scss')
    .pipe(sass({
      includePaths: [
        require('bourbon').includePaths,
        require('bourbon-neat').includePaths
      ],
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

// Pug task, compiles pug templates into root directory of repository
gulp.task('pug', () => {
  gulp.src('./src/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'));
});

// Watch task, watches css and pug files and runs tasks on changes
gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*', ['css']);
  gulp.watch('./src/views/**/*', ['pug']);
});

gulp.task('webserver', function() {
  connect.server();
});
