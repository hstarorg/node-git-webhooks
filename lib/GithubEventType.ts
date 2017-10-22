export enum GithubEventType {

  /**
   * Any Git push to a Repository, including editing tags or branches. Commits via API actions that update references are also counted. This is the default event.
   */
  Push,

  /**
   * Any time an Issue is assigned, unassigned, labeled, unlabeled, opened, edited, milestoned, demilestoned, closed, or reopened.
   */
  Issue,

  /**
   * Any time a Commit is commented on.
   */
  CommitNote,

  /**
   * Any time a comment on a pull request's unified diff is created, edited, or deleted (in the Files Changed tab).
   */
  PullRequestNote,

  /**
   * Any time a comment on an issue is created, edited, or deleted.
   */
  IssueNote,

  /**
   * Any time a pull request is assigned, unassigned, labeled, unlabeled, opened, edited, closed, reopened, or synchronized (updated due to a new push in the branch that the pull request is tracking). Also any time a pull request review is requested, or a review request is removed.
   */
  PullRequest,

  /**
   * Any time a pull request review is submitted, edited, or dismissed.
   */
  PullRequestReview,

  /**
   * Any time a Wiki page is updated.
   */
  Wiki,

  /**
   * Any time a Branch is created.
   */
  CreateBranch,

  /**
   * Any time a Tag is created.
   */
  CreateTag,

  /**
   * Any time a Branch is deleted.
   */
  DeleteBranch,

  /**
   * Any time a Tag is deleted.
   */
  DeleteTag,

  /**
   * 	Any time a Repository is forked.
   */
  Fork,

  /**
   * Any time a User stars a Repository.
   */
  Watch,

  /**
   * Any time a Label is created, edited, or deleted.
   */
  Label
};
