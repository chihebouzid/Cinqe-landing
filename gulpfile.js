const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const htmlclean = require('gulp-htmlclean');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const terser = require('gulp-terser');



//Compile Sass
gulp.task('sass', function () {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// Copy All HTML files
gulp.task('copyHtml', function () {
    gulp.src('src/*.html')
        .pipe(htmlclean())
        .pipe(gulp.dest('dist'));
});



//clean and build css files
gulp.task('buildCss', function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});


//clean and build js files
gulp.task('buildJs', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('script.min.js'))
        .pipe(terser())
        .pipe(gulp.dest('dist/js'));
});


//Watch & Serve 
gulp.task('serve', gulp.series('sass', function () {
    browserSync.init({
        server: './src'
    });

    gulp.watch(['src/scss/*.scss'], gulp.series('sass'));
    gulp.watch(['src/*.html']).on('change', browserSync.reload);
}));

//Default

gulp.task('default', gulp.parallel('serve', 'copyHtml', 'buildCss', 'buildJs'));