const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const webp = require("gulp-webp");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const imagemin = require("gulp-imagemin");
const fileInclude = require("gulp-file-include");

const scriptsPaths = [
  "node_modules/@fancyapps/ui/dist/fancybox/fancybox.umd.js",
  "node_modules/swiper/swiper-bundle.min.js",
  "app/js/_src/*.js",
];

function pages() {
  return src("app/html/pages/*.html")
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("app"))
    .pipe(browserSync.stream());
}

function styles() {
  return src("app/scss/style.scss")
      .pipe(autoprefixer({ overrideBrowserslist: ["last 10 version"] }))
      .pipe(concat("style.min.css"))
      .pipe(scss({ outputStyle: "compressed" }))
      .pipe(dest("app/css"))
      .pipe(browserSync.stream())
}

function scripts() {
  return src(scriptsPaths)
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function images() {
  return src("app/images/_src/**/*.*")
    .pipe(newer("app/images/"))
    .pipe(webp())
    .pipe(dest("app/images/"));
}

function fonts() {
  return src("app/fonts/_src/*.*")
    .pipe(
      fonter({
        formats: ["woff", "ttf"],
      })
    )
    .pipe(src("app/fonts/*.ttf"))
    .pipe(ttf2woff2())
    .pipe(dest("app/fonts"));
}

function watching() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
  watch(["app/scss/**/*.scss", ], styles);
  watch(["app/images/_src/"], images);
  watch(["app/js/_src/*.js"], scripts);
  watch(["app/html/**/*.html"], pages);
  watch(["app/**/*.html"]).on("change", browserSync.reload);
}

function cleanDist() {
  return src("dist").pipe(clean());
}

function building() {
  return src(
    [
      "app/css/style.min.css",
      "app/images/**/*.*",
      "!app/images/_src/**/*.*",
      "app/fonts/*.*",
      "app/js/main.min.js",
      "app/*.html",
      "!app/html",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
}

exports.images = images;
exports.pages = pages;
exports.fonts = fonts;
exports.building = building;
exports.scripts = scripts;
exports.styles = styles;
exports.watching = watching;

exports.build = series(building);
exports.default = parallel(fonts, styles, images, scripts, pages, watching);
