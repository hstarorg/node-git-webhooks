require('shelljs/global');
const gulp = require('gulp4');
const developServer = require('gulp-develop-server');
const notifier = require('node-notifier');

const notify = (message, title = '来自 git-webhooks 的通知') => notifier.notify({ message, title });

gulp.task('clean', done => {
  rm('-rf', 'dist');
  done();
});

gulp.task('tsc', done => {
  exec('tsc');
  done();
});

gulp.task('tsc:dist', done => {
  exec('tsc -p tsconfig-dist.json');
  done();
});

gulp.task('serve', done => {
  developServer.listen({ path: './dist/examples/gitlab-webhooks.js' }, err => {
    if (err) { console.error(err); }
    notify(`启动开发示例[${!err ? '成功' : '失败'}]`);
    done();
  });
});

gulp.task('restart', done => {
  developServer.restart(err => {
    if (err) { console.error(err); }
    notify(`重启开发示例[${!err ? '成功' : '失败'}]`);
    done();
  });
});

gulp.task('watch', done => {
  gulp.watch([
    'index.ts',
    'lib/**/*',
    'examples/**/*'
  ], gulp.series('tsc', 'restart'));
  done();
});



gulp.task('default', gulp.series(
  'clean',
  'tsc',
  gulp.parallel('serve', 'watch'))
);

gulp.task('copyPackageJson', () => {
  return gulp.src('./package.json')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series('clean', 'tsc:dist', 'copyPackageJson'));
