// IMPORT THE REQUIRED LIBS
/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const path = require('path');
const gulpLiveServer = require('gulp-live-server');
const inject = require('gulp-inject');
const wiredep = require('wiredep').stream;
const open = require('gulp-open');
const eslint = require('gulp-eslint');
/* eslint-enable */

// DEFINE GLOBAL PATHS
const config = {
  app: 'app',
  dist: 'dist'
};
// gulp.task('clean:temp', function(option){
//   return gulp.src('.tmp', {read: false})
//   .pipe(clean());
// });
gulp.task('clean:dist', function(option){
  return gulp.src(config.dist, {read: false})
  .pipe(clean());
});

gulp.task('server', ()=> {
  const server = gulpLiveServer.new('./server/app.js');
  server.start();
  //This lines notify the server and reload page
  gulp.watch(['./app/**/*.html'], file=>server.notify.apply(server, [file]));
  gulp.watch(['./app/**/*.js'], file=>server.notify.apply(server, [file]));
  gulp.watch(['./app/styles/*.css'], file=>server.notify.apply(server, [file]));
  //This line restart the node server
  gulp.watch(['./server/**/*.js'], file=>{
    console.log('Restarting server...');
    server.start();
  });
});

// Inject the bower.json dependencies in index.html file
gulp.task('wiredep', () => {
  gulp.src( path.join(config.app, '/index.html'))
    .pipe(wiredep())
    .pipe(gulp.dest(config.app));
});

gulp.task('inject', () => {
  const target = gulp.src(path.join(config.app, '/index.html'));
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  const sources = gulp.src([
    path.join(`!${config.app}/lib/**/*`),
    path.join(config.app, '/**/*.js'), // this are equivalent'./app/**/*.js'
    path.join(config.app, '/styles/*.css')
  ], { read: false });
  return target.pipe(inject(sources, { relative: true }))
    .pipe(gulp.dest(config.app));
});

gulp.task('open', () => {
  gulp.src(__filename)
    .pipe(open({ uri: 'http://localhost:9000' }));
});

gulp.task('lint', () =>
  gulp.src(['**/*.js', '!node_modules/**', '!app/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()));

gulp.task('start', [
  'wiredep',
  'inject',
  'server',
  'open'
]);