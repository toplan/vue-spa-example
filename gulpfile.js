var gulp = require('gulp');
var gutil = require("gulp-util");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
var del = require('del');
var minifycss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");

var paths = {
    app: {
        styles: [
            './src/css/**/*.css',
            './public/css/dist/**/*.css'
        ],
        scripts: [
            './public/js/plugins/**/*.js'
        ]
    }
};

// sass task
gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.*')
        .pipe(sass())
        .pipe(autoprefixer('last 10 version'))
        .pipe(gulp.dest('./public/css/dist'));
});

gulp.task('css', ['sass'], function () {
    // clear old styles file
    del(['./public/css/styles*.css'], function (err) {
    });

    return gulp.src(paths.app.styles)
        .pipe(concat('styles.css'))
        .pipe(minifycss())
        //.pipe(rev())
        .pipe(gulp.dest('./public/css'))
});

gulp.task('js', function () {
   del(['./public/js/scripts*.js'], function (err) {
   });

    return gulp.src(paths.app.scripts)
        .pipe(concat('scripts.js'))
        //.pipe(rev())
        .pipe(gulp.dest('./public/js'));
});

gulp.task("app-js", function (callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);

    // run webpack
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('build', ['css', 'js', 'app-js']);

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/css/**/*.*', ['css']);
    gulp.watch('./src/sass/**/*.*', ['css']);
    gulp.watch('./src/app/**/*.*', ['app-js']);
});

gulp.task('server', ['watch'], function () {
    browserSync.init({
        proxy: 'localhost/vue-spa-example/index.html'
    });
    gulp.watch('./index.html', reload);
    gulp.watch('./public/css/*.css', reload);
    gulp.watch('./public/js/*.js', reload);
    gulp.watch('./public/images/**/*.*', reload);
});

gulp.task('default', ['build']);
