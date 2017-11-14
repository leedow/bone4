var gulp 			= require('gulp');
var less 			= require('gulp-less');
var autoprefixer 	= require('gulp-autoprefixer');
var watch 			= require('gulp-watch');
var uglify			= require('gulp-uglify');
var minifyCSS 		= require('gulp-minify-css');
var webpack 		= require('gulp-webpack');
var gutil 			= require('gulp-util');
var rev				= require('gulp-rev');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


function build(src) {
	gulp.src(src)
		.pipe(less())
		.on('error', function(err) {
			gutil.log('Less Error!', err.message);
			this.end();
		})
		//.pipe(rev())
		.pipe(autoprefixer())
		//.pipe(minifyCSS())
		.pipe(gulp.dest('./build'))
		.pipe(reload({stream: true}));
}

var source = [
	// default light blue
	'./style/bone.less',
	'./style/bone-page.less',
	// dark blue
	'./style/bone-darkblue.less',
	// red
	'./style/bone-red.less',
	// yellow
	'./style/bone-yellow.less',
	// light green
	'./style/bone-lightgreen.less',
	// r
	'./style/mobile/r.less'
]

gulp.task('css', function(){
	watch('./style/**/*.less', function(){
		source.forEach(item => {
			build(item)
		})
	});
});

gulp.task('html', function(){
	gulp.watch("demos/**/*.html").on('change', reload);
})

// dev server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });
});

gulp.task('default', function(){
	gulp.run(['browser-sync', 'css', 'html']);
});
