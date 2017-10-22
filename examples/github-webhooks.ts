import { GithubEventType, GithubWebHooksServer } from '../';

const server = new GithubWebHooksServer();

server.onError(err => {
  console.error(err);
});

server.subscribe((evt: GithubEventType, data: any) => {
  if (evt === GithubEventType.Push) {
    console.log('push');
  } else if (evt === GithubEventType.Issue) {
    console.log('issue');
  } else if (evt === GithubEventType.IssueNote) {
    console.log('给issue添加/删除/修改评论');
  } else if (evt === GithubEventType.Wiki) {
    console.log('操作wiki');
  }
});

server.listen(1234)
  .then(() => {
    console.log('Github：监听端口：1234');
  });
