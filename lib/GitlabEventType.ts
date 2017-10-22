export enum GitlabEventType {

  /**
   * Triggered when you push to the repository except when pushing tags.
   */
  Push,

  /**
   * Triggered when you create (or delete) tags to the repository.
   */
  TagPush,

  /**
   * Triggered when a new issue is created or an existing issue was updated/closed/reopened.
   */
  Issue,

  /**
   * Triggered when a new comment is made on commits.
   */
  CommitNote,

  /**
   * Triggered when a new comment is made on merge requests.
   */
  MergeRequestNote,

  /**
   * Triggered when a new comment is made on issues.
   */
  IssueNote,

  /**
   * Triggered when a new comment is made on snippets.
   */
  SnippetNote,

  /**
   * Triggered when a new merge request is created, an existing merge request was updated/merged/closed or a commit is added in the source branch.
   */
  MergeRequest,

  /**
   * Triggered when a wiki page is created, updated or deleted.
   */
  Wiki,

  /**
   * Triggered on status change of Pipeline.
   */
  Pipeline,

  /**
   * Triggered on status change of a Build.
   */
  Build
};
