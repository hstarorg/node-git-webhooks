# GitHub

详细文档在：[https://developer.github.com/webhooks/](https://developer.github.com/webhooks/)

通过读取 `Request Headers` 中的 `X-Github-Event` 来判断 `WebHooks` 的类型，值是以下（不完全）

如果在配置 `WebHooks` 的时候，配置了 `Secret`，那么可以通过获取 `Request Headers` 中的 `X-Hub-Signature' 进行检验是否一致。
通过 `x-hub-signature': 'sha1=6ce8ae650178ff2daf7b64c2d7281114aa742b3c',`
x-github-event

1. **push(Push)** Any Git push to a Repository, including editing tags or branches. Commits via API actions that update references are also counted. This is the default event.
2. **issues(Issue)** Any time an Issue is assigned, unassigned, labeled, unlabeled, opened, edited, milestoned, demilestoned, closed, or reopened.
3. **commit_comment(CommitNote)**	Any time a Commit is commented on.
4. **pull_request_review_comment(PullRequestNote)**	Any time a comment on a pull request's unified diff is created, edited, or deleted (in the Files Changed tab).
5. **issue_comment(IssueNote)**	Any time a comment on an issue is created, edited, or deleted.
6. **pull_request(PullRequest)**	Any time a pull request is assigned, unassigned, labeled, unlabeled, opened, edited, closed, reopened, or synchronized (updated due to a new push in the branch that the pull request is tracking). Also any time a pull request review is requested, or a review request is removed.
7. **pull_request_review(PullRequestReview)**	Any time a pull request review is submitted, edited, or dismissed.
8. **gollum(Wiki)**	Any time a Wiki page is updated.
9. create
    1. **CreateBranch(CreateBranch)** Any time a Branch is created.
    2. **CreateTag(CreateTag)** Any time a Tag is created.
10. delete
    1. **DeleteBranch(DeleteBranch)** Any time a Branch is deleted.
    2. **DeleteTag(DeleteTag)** Any time a Tag is deleted.
11. **fork(Fork)**	Any time a Repository is forked.
12. **watch(Watch)**	Any time a User stars a Repository.
13. **label(Label)**	Any time a Label is created, edited, or deleted.

## 暂未实现钩子函数
```
deployment	Any time a Repository has a new deployment created from the API.
deployment_status	Any time a deployment for a Repository has a status update from the API.
installation	Any time a GitHub App is installed or uninstalled.
installation_repositories	Any time a repository is added or removed from an installation.
marketplace_purchase	Any time a user purchases, cancels, or changes their GitHub Marketplace plan.
member	Any time a User is added or removed as a collaborator to a Repository, or has their permissions modified.
membership	Any time a User is added or removed from a team. Organization hooks only.
milestone	Any time a Milestone is created, closed, opened, edited, or deleted.
organization	Any time a user is added, removed, or invited to an Organization. Organization hooks only.
org_block	Any time an organization blocks or unblocks a user. Organization hooks only.
page_build	Any time a Pages site is built or results in a failed build.
project_card	Any time a Project Card is created, edited, moved, converted to an issue, or deleted.
project_column	Any time a Project Column is created, edited, moved, or deleted.
project	Any time a Project is created, edited, closed, reopened, or deleted.
public	Any time a Repository changes from private to public.
repository	Any time a Repository is created, deleted (organization hooks only), made public, or made private.
release	Any time a Release is published in a Repository.
status	Any time a Repository has a status update from the API
team	Any time a team is created, deleted, modified, or added to or removed from a repository. Organization hooks only
team_add	Any time a team is added or modified on a Repository.
```

# GitLab

详细文档在：[https://gitlab.com/help/user/project/integrations/webhooks.md](https://gitlab.com/help/user/project/integrations/webhooks.md)

通过读取 `Request Headers` 中的 `X-Gitlab-Event` 来判断 `WebHooks` 的类型，值是以下7种。

如果在配置 `WebHooks` 的时候，配置了 `Secret Token`，那么可以通过获取 `Request Headers` 中的 `X-Gitlab-Token' 进行检验是否一致。

1. **Push Hook(Push)** Triggered when you push to the repository except when pushing tags.
2. **Tag Push Hook(TagPush)** Triggered when you create (or delete) tags to the repository.
3. **Issue Hook(Issue)** Triggered when a new issue is created or an existing issue was updated/closed/reopened.
4. Note Hook
    1. **commit(CommitNote)** Triggered when a new comment is made on commits.
    2. **merge_request(MergeRequestNote)** Triggered when a new comment is made on merge requests.
    3. **issue(IssueNote)** Triggered when a new comment is made on issues.
    4. **snippet(SnippetNote)** Triggered when a new comment is made on snippets.
5. **Merge Request Hook(MergeRequest)** Triggered when a new merge request is created, an existing merge request was updated/merged/closed or a commit is added in the source branch.
6. **Wiki Page Hook(Wiki)** Triggered when a wiki page is created, updated or deleted.
7. **Pipeline Hook(Pipeline)** Triggered on status change of Pipeline.
8. **Build Hook(Build)** Triggered on status change of a Build.
