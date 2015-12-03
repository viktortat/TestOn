'use strict';

var port = 8000;
var gulp = require('gulp'),
    rename = require("gulp-rename"),
    connect = require('gulp-connect'),
    notify      = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    rimraf = require('rimraf'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    pngquant  = require('imagemin-pngquant'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    opn = require('opn'),
    livereload = require('gulp-livereload');

var bc = './comp/';
//http://habrahabr.ru/post/261467/
//http://codereview.stackexchange.com/questions/62986/optimizing-gulpfile-js
//https://github.com/kriasoft/SPA-Seed.Front-end/blob/master/gulpfile.js
//http://frontender.info/getting-started-with-gulp-2/
//http://frontender.info/handling-sync-tasks-with-gulp-js/

//********************* Пути *******************************************
var path = {
    build: {
        js: './build/js/',
        css: './build/css/',
        images: './build/img/',
        imgres: './build/img/resize/',
        fonts: './build/fonts/',
        fontsBootstrap: 'build/fonts/bootstrap/'
    },
    src: {
        js: './app/js/*.js',
        styles: 'src/styles/template_styles.scss',
        css: './app/css/**/*.css',
        stylesPartials: 'src/styles/partials/',
        spriteTemplate: 'src/sass.template.mustache',
        images: './app/img/**/*.*',
        sprite: 'sprite/*.*',
        fonts: 'fonts/**/*.*',
        fontsBootstrap: 'comp/bootstrap-sass/assets/fonts/bootstrap/*.*'
    },
    watch: {
        js: './app/js/**/*.js',
        styles: 'styles/**/*.scss',
        css: './app/css/**/*.css',
        images: 'img/**/*.*',
        sprite: 'sprite/*.*',
        fonts: 'fonts/**/*.*'
    },
    clean: './build',
    cleanDoc: './DocHelp-jsdoc'
};

//--------------------------------------------------------------------
// Работа с html
gulp.task('html:watch', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

// Работа с css
gulp.task('css:watch', function () {
    gulp.src('./app/css/*.css')
        .pipe(autoprefixer())
        .pipe(connect.reload());
});

// Работа с js
gulp.task('js:watch', function () {
    gulp.src('./app/js/*.js')
        .pipe(connect.reload());
});
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
//--------------------------------------------------------------------

// Запуск сервера
gulp.task('connectSrvLR', function() {
    connect.server({
        //root: '.', //Не дает с корня работать - ошибка доступа при localhost
        root: 'app/',
        port: port,
        livereload: true
        //middleware: middlewares
    });
    opn('http://localhost:'+port)
});

//-----------------------------------------------------------------------------------
//Предварительная очистка
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src('./app/*.html')
        .pipe(changed('./build'))
        .pipe(gulp.dest('./build/'));
    //.pipe(connect.reload());
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(sourcemaps.init())            //Инициализируем sourcemap
        .pipe(uglify())                     //Сожмем наш js
        .pipe(rename(function (path) {
            if (path.extname === '.js') {
                path.basename += '.min';
            }
        }))
        .pipe(sourcemaps.write())            //Пропишем карты
        .pipe(gulp.dest(path.build.js));     //Выплюнем готовый файл в build
    //.pipe(connect.reload());
});

gulp.task('css:build', function () {
    gulp.src(path.src.css)
        .pipe(concatCss("style.min.css"))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('img', function () {
    gulp.src('./app/img/*.{jpg,png}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(path.build.images));
    //.pipe(connect.reload());
});
//-----------------------------------------------------------------------------------

gulp.task('default', ['connectSrvLR','watch']);
gulp.task('make_build', ['clean','js:build','css:build','html:build','img']);
// Watch
gulp.task('watch', function () {
    gulp.watch(['./app/**/*.html'], ['html:watch']);
    gulp.watch(['./app/css/**/*.css'], ['css:watch']);
    gulp.watch(['./app/js/**/*.js'], ['js:watch']);
    gulp.watch(['./app/sass/**/*.scss'], ['sass:watch']);
});