var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-minify-css'),
  rename = require('gulp-rename');

gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('styles', function(){
  gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('default', ['scripts', 'styles']);
