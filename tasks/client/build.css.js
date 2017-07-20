import gulp from "gulp";
import cssmin from "gulp-clean-css";
import {base, tasks} from "./const";

const CSS = base.DIST + "**/*.css";

gulp.task(tasks.CLIENT_BUILD_CSS_DIST, () => {
    return gulp.src(CSS, {base: base.DIST})
        .pipe(cssmin())
        .pipe(gulp.dest(base.DIST));
});
