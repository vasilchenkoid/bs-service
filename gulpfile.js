// const gulp = require('gulp');
import gulp from 'gulp';

// css
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import bulk from 'gulp-sass-bulk-importer';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import map from 'gulp-sourcemaps';

// live
import browsersync from 'browser-sync';

// js
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

// img
import imagemin from 'gulp-imagemin';

// files
import {deleteAsync as del} from 'del';
import fileInclude from 'gulp-file-include';

// fonts
import gulpIf from 'gulp-if';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';



const path = {
    build: {
        js: './docs/js/',
        css: './docs/css/',
        html: './docs/',
        img: './docs/img/',
        fonts: './docs/fonts/',
        libs: './docs/libs/'
    },
    src: {
        js: './src/js/main.js',
        css: './src/scss/**/*.scss',
        html: './src/*.html',
        img: './src/img/**/*.{jpg,jpeg,png,gif,webp}',
        fonts: './src/fonts/**/*.{ttf,otf}',
        libs: './src/libs/**/*.*'
    },
    watch: {
        js: './src/js/**/*.js',
        css: './src/scss/**/*.scss',
        html: './src/**/*.html',
        img: './src/img/**/*.*',
        fonts: './src/fonts/*.*',
        libs: './src/libs/**/*.*'
    }
};



function js() {
    return gulp
        .src(path.src.js, {allowEmpty: true}) // выбор файлов
        .pipe(concat('main.js')) // объединение в 1 файл
        .pipe(uglify()) // сжатие
        .pipe(gulp.dest(path.build.js)) // перенос в сборку
        .pipe(browsersync.stream()); // обновление страницы
}

function css() {
    return gulp
        .src(path.src.css) // выбор файлов
        .pipe(map.init()) // инициализация карты
        .pipe(bulk()) // проход через плагин, позволяющий использовать директиву @include в scss для директорий, а не только для отдельных файлов
        .pipe(sass().on('error', sass.logError)) // проверка ошибок sass
        .pipe(map.write('.')) // запись карты
        .pipe(gulp.dest(path.build.css)) // перенос в сборку
        .pipe(browsersync.stream()); // обновление страницы
}

function mincss() {
    return gulp
        .src(path.src.css) // выбор файлов
        .pipe(map.init()) // инициализация карты
        .pipe(bulk()) // проход через плагин, позволяющий использовать директиву @include в scss для директорий, а не только для отдельных файлов
        .pipe(sass().on('error', sass.logError)) // проверка ошибок sass
        .pipe(cleanCSS()) // минификация и оптимизация css
        .pipe(rename({suffix: '.min'})) // добавление .min к названию
        .pipe(map.write('.')) // запись карты
        .pipe(gulp.dest(path.build.css)) // перенос в сборку
        .pipe(browsersync.stream()); // обновление страницы
}

function libs() {
    return gulp
        .src(path.src.libs) // выбор файлов
        .pipe(gulp.dest(path.build.libs)) // перенос в сборку
        .pipe(browsersync.stream()); // обновление страницы
}

function html() {
    return gulp
        .src(path.src.html) // выбор файлов
        .pipe(fileInclude()) // сборка файлов
        .pipe(gulp.dest(path.build.html)) // перенос в сборку
        .pipe(browsersync.stream()); // обновление страницы
}

async function img() {
    return gulp
        .src(path.src.img, {encoding:false}) // выбор файлов, отключение кодировки
        .pipe(imagemin()) // сжатие картинок
        .pipe(gulp.dest(path.build.img)) // перенос в сборку
        .pipe(gulp.src('./src/img/**/*.svg')) // выбор svg
        .pipe(gulp.dest(path.build.img)) // перенос в сборку
        .pipe(browsersync.stream()); // обновление страницы
}

function fonts() {
    return gulp
        .src(path.src.fonts, {encoding:false}) // выбор файлов, отключение кодировки
        .pipe(ttf2woff2()) // преобразование шрифтов
        .pipe(gulp.dest(path.build.fonts)) // перенос в сборку
        .pipe(gulp.src('./src/fonts/**/*.woff')) // выбор woff
        .pipe(gulp.dest(path.build.fonts)) // перенос в сборку
        .pipe(gulp.src('./src/fonts/**/*.woff2')) // выбор woff2
        .pipe(gulp.dest(path.build.fonts)) // перенос в сборку
}



function server() {
    browsersync.init({
        server: {
            baseDir: './docs/'
        },
        notify: false, // отключение уведомления
        port: 3000
    });
}

function watch() {
    gulp.watch(path.watch.libs, libs);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.fonts, fonts);
    gulp.watch(path.watch.css, css);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.img, img);
}

function clean() {
    return del('./docs');
}



const build = gulp.series(clean, gulp.parallel(html, fonts, libs, css, js, img), mincss);
const dev = gulp.series(gulp.parallel(html, libs, css, js, img), mincss, gulp.parallel(watch, server));

gulp.task('default', build);
gulp.task('build', build);
gulp.task('dev', dev);
gulp.task('clean', clean);
