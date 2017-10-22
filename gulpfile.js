const gulp = require('gulp4');
const developServer = require('gulp-develop-server');
const notifier = require('node-notifier');

const notify = (message, title = '来自 git-webhooks 的通知') => notifier.notify({ message, title });

gulp.task('serve', done => {
  developServer.listen({ path: './examples/gitlab-webhooks.js' }, err => {
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
    'index.js',
    'lib/**/*',
    'examples/**/*'
  ], gulp.series('restart'));
  done();
});

gulp.task('default', gulp.parallel('serve', 'watch'));
