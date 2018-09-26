const gulp = require('gulp');
const eslint = require('gulp-eslint');

var javascripts_path = ['javascripts/*.js'];

gulp.task('eslint', () => {
    return gulp.src(javascripts_path)
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint({
            "rules":{
                "camelcase": 1,
                "comma-dangle": 2,
                "quotes": 0
            }
        }))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});


gulp.task('watch', () => {
    gulp.watch(javascripts_path, ['eslint'])
})

gulp.task('default', ['eslint', 'watch'])