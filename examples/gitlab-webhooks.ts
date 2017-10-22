import { GitlabEventType, GitlabWebHooksServer } from '../';

const server = new GitlabWebHooksServer();

server.onError(err => {
  console.error(err);
});


server.subscribe((evt: GitlabEventType, data: any) => {
  if (evt === GitlabEventType.Push) {
    console.log('push');
  } else if (evt === GitlabEventType.Issue) {
    console.log('issue');
  }
});

server.listen(1234)
  .then(() => {
    console.log('Gitlab：监听端口：1234');
  });
