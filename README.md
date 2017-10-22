# node-git-webhooks
The webhooks lib for code repositories based on git.

# Usage

```bash
# Local install
npm i -S node-git-webhooks
```

```js
const gitWebhooks = require('node-git-webhooks').default;

const server = new gitWebhooks.GitlabWebHooksServer();
// All gitlab webhooks type.
const gitlabEventType = gitWebhooks.GitlabEventType;

server.subscribe((evt, data) => {
  if (evt === gitlabEventType.Push) {
    console.log('push', data);
  } else if (evt === gitlabEventType.IssueNote) {
    console.log('issue note', data);
  }
});

server.onError(err => {
  console.error('Error', err);
});

// Run web hooks server at port 8000;
server.listen(8000).then(server => {
  console.log('server started...');
});
```

# How to Develop

```bash
# Clone the project
git clone <repositoty url>

# Install deps
npm i

# Run dev
npm run dev

# Run build and generate declarations.
npm run build
```

# [CHANGLOG](CHANGLOG.md)

