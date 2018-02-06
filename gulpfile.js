var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var concat = require('gulp-concat');
//test task
gulp.task('thingy', function() {
  console.log('gulp task functions');
})

//real tasks

//concatenate interfaces
gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});



gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./js/*-interface.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
