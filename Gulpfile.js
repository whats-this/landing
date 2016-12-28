const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')

gulp.task('default', ['css'], () => {
  return gulp.src('./src/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
})
gulp.task('css', () => {
    return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
})
