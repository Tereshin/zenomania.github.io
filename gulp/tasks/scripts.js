'use strict';

module.exports = function(options) {
  
  return function() {
    return gulp.src(options.src)
                .pipe($.concat('index.js'))
                .pipe(gulp.dest(options.buildPath))
  };

}