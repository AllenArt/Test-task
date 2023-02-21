const {src, dest, series, watch} = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const clean = require("gulp-clean");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const sync = require("browser-sync").create();

function scss() {
  return src("source/scss/**.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(concat("style.css"))
    .pipe(dest("source/css"))
}

function clear() {
  return src("source/css/style.css")
  .pipe(clean())
}

function server() {
  sync.init({
    server:""
  })

  watch("source/**.html").on("change", sync.reload)
  watch("source/scss/**.scss", series(scss)).on("change", sync.reload)
  watch("source/scss/blocks/**.scss", series(scss)).on("change", sync.reload)
}

exports.build = series(clear, scss, server)
exports.server = server
exports.clear = clear