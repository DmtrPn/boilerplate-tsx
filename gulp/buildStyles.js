const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

module.exports = function buildStyles() {
    return gulp.src([
            'node_modules/normalize.css/normalize.css',
            'src/**/*.scss',
            'dist/**/*.scss'
        ])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist'));
}
