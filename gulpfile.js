var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var cfg = {
    src: './src/**/*.js',
    dest: './build/',
    tmp: './tmp/',
    specs: './tests/**/*.spec.js'
};

require('babel/register');

gulp.task('jscs', function () {
    return gulp.src(cfg.src)
        .pipe(jscs());
});

gulp.task('hint', function () {
    return gulp.src(cfg.src)
        .pipe(jshint('./.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('tests', function () {
    return gulp.src(cfg.specs, { read: false })
        .pipe(mocha({
            reporter: 'spec',
            compilers: 'babel'
        }));
});

gulp.task('default', ['jscs', 'hint']);
