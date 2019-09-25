const gulp = require('gulp');
const nodemon = require('gulp-nodemon');


gulp.task('default', function () {
    nodemon({
        script: 'src/app.js',
        ext: 'js',
        ignore: ['./node_modules/**']
    }).on('start', function () {

    }).on('restart', function () {

    });
});