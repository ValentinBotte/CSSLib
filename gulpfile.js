// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

// Variables de chemins
var source = './assets/scss/*.scss'; // dossier de travail
var destination = './assets/css'; // dossier à livrer

gulp.task('css', function () {
    return gulp.src(source)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(destination));
});

gulp.task('watch', function () {
    gulp.watch(source, gulp.series('css'));
}); 