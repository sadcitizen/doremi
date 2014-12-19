var gulp = require('gulp');
var pkg = require('./package.json');
var template = require('gulp-template');
var preprocess = require('gulp-preprocess');
var rename = require('gulp-rename');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('build', function () {
    return gulp.src(['./src/mint.js'])
        .pipe(preprocess())
        .pipe(template({ version: pkg.version }))
        .pipe(rename({ basename: 'mint' }))
        .pipe(gulp.dest('build'));
});

gulp.task('jscs', function() {
    return gulp.src(['./build/mint.js'])
        .pipe(jscs());
});

gulp.task('hint', function () {
    return gulp.src(['./build/mint.js'])
        .pipe(jshint('./.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function () {
    return gulp.src(['./build/mint.js'])
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['build'/*, 'jscs', 'hint', 'uglify'*/]);