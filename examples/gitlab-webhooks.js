const gitWebhooks = require('../');

const server = new gitWebhooks.WebHooksServer();

server.listen(1234)
  .then(() => {
    console.log('监听端口：1234');
  });
