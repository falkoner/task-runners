Install Gulp globally
```
npm install -g gulp
```

Also install Gulp locally to create proper folder
```
npm install gulp --save-dev
```

Main config file is gulpfile.js
```
var gulp = require('gulp')

gulp.task('default', function() {
  //code will go in here
});
```

General patterin is to install required tools:
```
npm install --save-dev gulp-uglify gulp-rename
```

And then define tasks to use them via pipe:
```
var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(uglify())
        .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('default', ['scripts']);
```

See more instructions [here](https://discussions.udacity.com/t/gulp-and-setting-up-a-gulp-workflow-intermediate/24359/3)
