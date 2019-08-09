const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
var rename = require("gulp-rename");

gulp.task("sass", function() {
  gulp
    .src(["./src/scss/*.scss"])
    .pipe(
      sass({
        includePaths: ["./src/scss"],
        outputStyle: "expanded"
      })
    )
    .pipe(gulp.dest("./srv/css"));
});

gulp.task("js", function() {
  gulp.src(["./src/js/*.js"]).pipe(gulp.dest("./srv/js/"));
  gulp
    .src("./node_modules/es6-scroll-to/lib/index.js")
    .pipe(rename("es6-scroll-to.js"))
    .pipe(gulp.dest("./srv/js/"));
});

gulp.task("html", function() {
  gulp.src("./src/*.html").pipe(gulp.dest("./srv/"));
});

gulp.task("connect:open", function() {
  const opn = require("opn");
  return opn("http://localhost:1337");
});

gulp.task("connect", function() {
  connect.server({
    root: "srv",
    port: 1337,
    livereload: true
  });
});

gulp.task("livereload", function() {
  gulp.src("./srv/**/*").pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch("./src/*.html", ["html"]);
  gulp.watch("./src/js/*.js", ["js"]);
  gulp.watch("./src/scss/**/*.scss", ["sass"]);
  gulp.watch("./src/**/*", ["livereload"]);
});

gulp.task("default", [
  "connect",
  "connect:open",
  "watch",
  "sass",
  "js",
  "html"
]);
