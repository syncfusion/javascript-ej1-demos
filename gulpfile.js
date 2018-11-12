'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('copyfiles', function(){
	gulp.src('node_modules/syncfusion-javascript/Scripts/ej/web/ej.web.all.min.js')
        .pipe(gulp.dest('scripts'));
	gulp.src('node_modules/syncfusion-javascript/Scripts/ej/web/ej.reportdesigner.min.js')
        .pipe(gulp.dest('scripts'));
	gulp.src('node_modules/syncfusion-javascript/Scripts/ej/web/ej.documenteditor.min.js')
        .pipe(gulp.dest('scripts'));
	gulp.src('node_modules/syncfusion-javascript/Scripts/ej/common/ej.unobtrusive.min.js')
        .pipe(gulp.dest('scripts'));
	gulp.src('node_modules/syncfusion-javascript/Scripts/ej/common/ej.widget.ko.min.js')
        .pipe(gulp.dest('scripts'));
    gulp.src('node_modules/syncfusion-ej-global/i18n/*.js')
        .pipe(gulp.dest('scripts/cultures'));
    gulp.src('node_modules/syncfusion-ej-global/l10n/*.js')
        .pipe(gulp.dest('scripts/l10n'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/**')
        .pipe(gulp.dest('content/ejthemes'));
});
gulp.task('default', function() {
	connect.server({
		port: 5200,
		fallback: 'default.htm',
		livereload: true
	});
});