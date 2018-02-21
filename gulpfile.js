const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const watch = require('gulp-watch');

const tasks = require('./gulp');

gulp.task('default', gulpSequence(
    'clean',
    'fonts',
    'collect-images',
    ['csscomb', 'tslint'],
    ['styles', 'external-styles'],
    'tcm',
    'build'
));

gulp.task('dev', gulpSequence('default', 'watch'));


gulp.task('clean', ['clean-client', 'clean-server']);
gulp.task('styles', ['sass']);
gulp.task('sass', tasks.buildStyles);
gulp.task('csscomb', tasks.csscomb);
gulp.task('external-styles', tasks.externalStyles);
gulp.task('icon-type', tasks.generateIconType);
gulp.task('tslint', tasks.tslint);
gulp.task('tcm', tasks.typeCssModules);
gulp.task('build', gulpSequence('html', 'bundle', 'compile-server'));
gulp.task('html', tasks.renderHtml);
gulp.task('bundle', ['compile-client'], tasks.makeBundle);
gulp.task('compile-client', tasks.compileClient);
gulp.task('compile-server', tasks.compileServer);
gulp.task('clean-client', tasks.cleanClient);
gulp.task('clean-server', tasks.cleanServer);
gulp.task('fonts', tasks.fonts);
gulp.task('collect-images', tasks.collectImages);

gulp.task('watch', () => {
    watch(['src/client/**/*.ts', 'src/client/**/*.tsx'], () => gulp.start('bundle'));
    watch(['src/server/**/*.ts', 'src/server/**/*.tsx'], () => gulp.start('compile-server'));
    watch(['src/**/*.ts', 'src/**/*.tsx'], () => gulp.start('tslint'));
    watch(['src/client/**/*.scss'], () => gulp.start('styles'));
    watch(['dist/client/**/*.css'], () => gulp.start('tcm'));
});
