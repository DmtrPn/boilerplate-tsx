const gulp = require('gulp');

const webpack = require('webpack-stream');

module.exports = function() {
    return gulp.src('dist/client/app.js')
        .pipe(webpack(require('../webpack.gulp.config.js')))
        .pipe(gulp.dest('public/static'));
};
