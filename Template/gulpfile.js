#!/usr/bin/env node

require("gulp-cli")();

var gulp = require("gulp"),
  markdown = require("gulp-remarkable"),
  frontMatter = require("gulp-front-matter"),
  layout = require("gulp-layout");

gulp.task("Build Docs", function () {
  return gulp
    .src("~/22-dataanddatabases/exercises/*.md")
    .pipe(frontMatter())
    .pipe(markdown({ html: true }))
    .pipe(
      layout(function (file) {
        return file.frontMatter;
      })
    )
    .pipe(gulp.dest("gulpTest"));
});

function defatultTask() {
  gulp.task("both", function () {
    gulp.watch("~/22-dataanddatabases/exercises/*.md", ["Build Docs"]);
  });
}

exports.default = defatultTask();
