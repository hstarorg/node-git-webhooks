import gitWebhooks from '../';

const server = new gitWebhooks.GitlabWebHooksServer();

server.listen(1234)
  .then(() => {
    console.log('监听端口：1234');
  });
