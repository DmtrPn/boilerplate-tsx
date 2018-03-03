const gulp = require('gulp');
const webpack = require('webpack-stream');

const CONFIG_PATH = process.env.BTSX_ENV === 'prod' ? '../webpack.prod.config.js' : '../webpack.dev.config.js';

module.exports = function() {
    return gulp.src('dist/client/app.js')
        .pipe(webpack(require(CONFIG_PATH)))
        .pipe(gulp.dest('public/static'));
};
