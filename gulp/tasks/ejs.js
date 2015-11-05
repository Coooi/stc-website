var gulp  = require('gulp'),
    ejs   = require("gulp-ejs");

gulp.task('ejs', function() {
  return gulp.src("app/views/**/*.ejs")
            .pipe(ejs({
                  msg: "Hello Gulp!"
              }))
            .pipe(gulp.dest("./public"));
});
