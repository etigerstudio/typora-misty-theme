const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const touch = require('gulp-touch-cmd');

function build() {
    init();
    return src('src/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({
            format: 'beautify',
            level: 2
        }))
        .pipe(dest('dist/'))
        .pipe(touch());
}

function init() {
    sass.compiler = require('node-sass');
}

exports.build = build;
