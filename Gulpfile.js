var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');


// Compile Sass files then add browswer prefixes
gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('compiled'))
});

// Minify Stylesheet
gulp.task('minifyCSS', function() {
    return gulp.src('compiled/*.css')
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./'))
});

// Watch for scss changes
gulp.task('sass:watch',function() {
  gulp.watch('sass/**/*.scss', ['sass','minifyCSS']);
});

//Run all gulp tasks
gulp.task('default', ['sass', 'minifyCSS','sass:watch']);
