let gulp = require('gulp')
let htmlmin = require('gulp-htmlmin')
let cssmin = require('gulp-cssmin')
let autoprefixer = require('gulp-autoprefixer')
let babel = require('gulp-babel')
let uglify = require('gulp-uglify')
let del = require('del')
let webserver = require('gulp-webserver')

//html
let htmlHandler = () => {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest('./dist/html'))
}
//css
let cssHandler = () => {
    return gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(autoprefixer({
            Browserslist: ['last 2 versions', 'ios>7', 'firefox<20', 'last 2 EXP']
        }))
        .pipe(gulp.dest('./dist/css'))
}
//js
let jsHandler = () => {
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['es2015', 'es2016'],
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}
//image
let imageHandler = () => {
    return gulp.src('./src/images/**')
        .pipe(gulp.dest('./dist/images'))
}
//json
let jsonHandler = () => {
    return gulp.src('./src/json/*.json')
        .pipe(gulp.dest('./dist/json'))
}
//php
let phpHandler = () => {
    return gulp.src('./src/php/*.php')
        .pipe(gulp.dest('./dist/php'))
}
//iconfont
let iconfontHandler = () => {
    return gulp.src('./src/iconfont/**')
        .pipe(gulp.dest('./dist/iconfont'))
}
//del
let delHandler = () => {
    return del(['./dist'])
}

module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(htmlHandler, cssHandler, jsHandler, iconfontHandler, phpHandler, imageHandler, jsonHandler),
    watchHandler
)