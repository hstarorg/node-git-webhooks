# GitHub

详细文档在：[https://developer.github.com/webhooks/](https://developer.github.com/webhooks/)

通过读取 `Request Headers` 中的 `X-Github-Event` 来判断 `WebHooks` 的类型，值是以下（不完全）

如果在配置 `WebHooks` 的时候，配置了 `Secret`，那么可以通过获取 `Request Headers` 中的 `X-Hub-Signature' 进行检验是否一致。
通过 `x-hub-signature': 'sha1=6ce8ae650178ff2daf7b64c2d7281114aa742b3c',`
x-github-event

# GitLab

详细文档在：[https://gitlab.com/help/user/project/integrations/webhooks.md](https://gitlab.com/help/user/project/integrations/webhooks.md)

通过读取 `Request Headers` 中的 `X-Gitlab-Event` 来判断 `WebHooks` 的类型，值是以下7种。

如果在配置 `WebHooks` 的时候，配置了 `Secret Token`，那么可以通过获取 `Request Headers` 中的 `X-Gitlab-Token' 进行检验是否一致。

1. Push Hook
2. Tag Push Hook
3. Issue Hook
4. Note Hook
  1. commit
  2. merge_request
  3. issue
  4. snippet
5. Merge Request Hook
6. Wiki Page Hook
7. Pipeline Hook
8. Build Hook
