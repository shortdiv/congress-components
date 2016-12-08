var gulp = require('gulp'),
    vulcanize = require('gulp-vulcanize'),
    runSequence = require('gulp-run-sequence'),
    dotenv = require('dotenv'),
    fs = require('fs-extra');

var env = dotenv.config();

gulp.task('copy', function() {
  return gulp.src([
    './index.html',
    './bower_components/webcomponentsjs/webcomponents-lite.js'
  ])
  .pipe(gulp.dest('dist'));
});

gulp.task('vulcanize', function() {
  return gulp.src('./components.html')
    .pipe(vulcanize({
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
    }))
    .pipe(gulp.dest('dist/'))
})

gulp.task('env', function() {
  var content = fs.readFileSync("dist/components.html", 'utf8');
  thing = content.replace('process.env.CONGRESS', "'" + process.env.CONGRESS + "'")
  fs.writeFile("dist/components.html", thing)
})

gulp.task('default', function() {
  runSequence(['copy','vulcanize'], 'env')
});
