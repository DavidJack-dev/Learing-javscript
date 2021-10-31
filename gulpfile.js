const gulp = require('gulp');
const bable = require('gulp-babel');



gulp.task('default', function () {
 //노드 소스
 gulp.src("es6/**/*.js")
 .pipe(bable())
 .pipe(gulp.dest("dist"));
 //브라우저 소스
 gulp.src("es6/**/*.js")
 .pipe(bable())
 .pipe(gulp.dest("public/dist"));    
});