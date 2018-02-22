const gulp = require('gulp');
const fs = require('fs');
const inline = require('gulp-inline');
const process = require('process');
const argv = require('yargs').argv;

function render(baseUrl) {
    let html = `
        <!doctype html>
        <html lang="ru">
            <head>
                <meta charset="utf-8">
                <meta name="viewport"
                    content="width=device-width, initial-scale=1">
                <title>TSX boilerplate</title>
                <link href="/static/styles.css" media="all" rel="stylesheet">
                <link href="/static/externalStyles.css" media="all" rel="stylesheet">
            </head>
            <body>
                <div id="root"></div>
                <img src="/sprite.svg" class="i-hidden" />
                <script>window.BASE_URL = "${baseUrl || ''}";</script>
                <script src="/static/bundle.js"></script>
            </body>
        </html>`;

    return html.trim();
}

module.exports = function renderHtml() {
    if (!fs.existsSync('dist/client')) {
        fs.mkdirSync('dist/client');
    }

    let html = render(argv.baseUrl);
    fs.writeFileSync('dist/client/index.html', html);

    return gulp.src('./dist/client/index.html')
        .pipe(inline({
            base: 'public/',
            disabledTypes: ['img', 'js', 'css']
        }))
        .pipe(gulp.dest('./public'));
}
