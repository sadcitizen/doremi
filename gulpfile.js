var gulp = require('gulp');
var pkg = require('./package.json');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var template = require('gulp-template');
var mocha = require('gulp-mocha');
var cfg = {
    src: './src/*.js',
    dest: './build/',
    specs: './tests/*.spec.js'
};

gulp.task('browserify', function () {
    var bundlify = function (src) {
        src.forEach(function (item) {
            return browserify('./src/' + item + '.js', { standalone: item })
                .bundle()
                .pipe(source('mint.' + item + '.js'))
                .pipe(gulp.dest('./build/'));
        });
    };

    bundlify(['is']);
});

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
        .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('uglify', function () {
    return gulp.src('./build/mint.*.js')
        .pipe(template({ version: pkg.version }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('build/min'));
});

gulp.task('default', ['jscs', 'hint', 'browserify', 'uglify']);