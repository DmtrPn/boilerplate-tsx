const gulp = require('gulp');
const tcm = require('gulp-typed-css-modules');

const DIST = 'dist/client/**/*.css';
const SRC = 'src/client/';

module.exports = function typeCssModules() {
    return gulp.src(DIST)
    .pipe(tcm({camelCase: true}))
    .pipe(gulp.dest(SRC));
}
