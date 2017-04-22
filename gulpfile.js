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

gulp.task('css', function(){
	watch('./style/**/*.less', function(){
		gulp.src('./style/bone-all.less')
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


		gulp.src('./style/bone-page-mobile.less')
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

		gulp.src('./style/bone-page-mobile-x2.less')
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

			/*
		gulp.src('./style/bone-pc.less')
			.pipe(less())
			.on('error', function(err) {
				gutil.log('Less Error!', err.message);
				this.end();
			})
			//.pipe(rev())
			.pipe(autoprefixer())
			//.pipe(minifyCSS())
			.pipe(gulp.dest('./build'))*/

		gulp.src('./style/bone-mobile.less')
			.pipe(less())
			.on('error', function(err) {
				gutil.log('Less Error!', err.message);
				this.end();
			})
			//.pipe(rev())
			.pipe(autoprefixer())
			//.pipe(minifyCSS())
			.pipe(gulp.dest('./build'))


		gulp.src('./style/bone-mobile-red.less')
			.pipe(less())
			.on('error', function(err) {
				gutil.log('Less Error!', err.message);
				this.end();
			})
			//.pipe(rev())
			.pipe(autoprefixer())
			//.pipe(minifyCSS())
			.pipe(gulp.dest('./build'))


			/*
		gulp.src('./style/bone-mobile-x2.less')
			.pipe(less())
			.on('error', function(err) {
				gutil.log('Less Error!', err.message);
				this.end();
			})
			//.pipe(rev())
			.pipe(autoprefixer())
			//.pipe(minifyCSS())
			.pipe(gulp.dest('./build'))*/



			gulp.src('./style/mobile/r.less')
				.pipe(less())
				.on('error', function(err) {
					gutil.log('Less Error!', err.message);
					this.end();
				})
				//.pipe(rev())
				.pipe(autoprefixer())
				//.pipe(minifyCSS())
				.pipe(gulp.dest('./build'))

				/*
			gulp.src('./style/bone-all-darkblue.less')
				.pipe(less())
				.on('error', function(err) {
					gutil.log('Less Error!', err.message);
					this.end();
				})
				//.pipe(rev())
				.pipe(autoprefixer())
				//.pipe(minifyCSS())
				.pipe(gulp.dest('./build'))*/
	});
});

gulp.task('html', function(){
	gulp.watch("demos/**/*.html").on('change', reload);
})

// 静态服务器
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
