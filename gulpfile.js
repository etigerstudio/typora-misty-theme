const { src, dest } = require('gulp');
const sass = require('gulp-sass');

function build() {
    init();
    return src('src/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/'));
}

function init() {
    sass.compiler = require('node-sass');
}

exports.build = build;
