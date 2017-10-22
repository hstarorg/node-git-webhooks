import * as Koa from 'koa';
import { IWebHooksServer } from './IWebHooksServer';
import { KoaServer } from './KoaServer';
import { ServerOptions } from './ServerOptions';
import { GithubEventType } from './GithubEventType';
import { cryptoHelper } from '../utils';

export class GithubWebHooksServer implements IWebHooksServer {
  private server: KoaServer;
  private onErrorCallback: (err: Error) => void;
  private subscribeFn: (eventType: GithubEventType, data: any, headers?: any) => void;

  constructor(private options?: ServerOptions) {
    this.options = options || {};
    this.server = new KoaServer();
    this.server.use(this._processRequest.bind(this));
  }

  private _processRequest(context: Koa.Context) {
    const githubEvent = context.headers['x-github-event'];
    const githubToken = context.headers['x-hub-signature'];
    const body = context.request.body;
    // 校验Secret Token
    if (this.options.token && !this._checkToken(this.options.token, body, githubToken)) {
      this.onErrorCallback && this.onErrorCallback(new Error('Invalid secret token.'));
      context.status = 204;
      context.body = '';
      return;
    }
    const eventType = this._getEventType(githubEvent, body);
    this.subscribeFn && this.subscribeFn.call(null, eventType, body, context.headers);
    context.status = 204;
    context.body = '';
  }

  private _checkToken(key: string, body: any, githubToken: string) {
    let sign = 'sha1=' + cryptoHelper.hmacSha1(JSON.stringify(body), key);
    return sign === githubToken;
  }

  private _getEventType(githubEvent: string, body: any): GithubEventType {
    switch (githubEvent) {
      case 'push':
        return GithubEventType.Push;
      case 'issues':
        return GithubEventType.Issue;
      case 'commit_comment':
        return GithubEventType.CommitNote;
      case 'pull_request_review_comment':
        return GithubEventType.PullRequestNote;
      case 'issue_comment':
        return GithubEventType.IssueNote;
      case 'pull_request':
        return GithubEventType.PullRequest;
      case 'pull_request_review':
        return GithubEventType.PullRequestReview;
      case 'gollum':
        return GithubEventType.Wiki;
      case 'create':
        return body.ref_type === 'branch' ? GithubEventType.CreateBranch : GithubEventType.CreateTag;
      case 'delete':
        return body.ref_type === 'branch' ? GithubEventType.DeleteBranch : GithubEventType.DeleteTag;
      case 'fork':
        return GithubEventType.Fork;
      case 'watch':
        return GithubEventType.Watch;
      case 'label':
        return GithubEventType.Label;
      default:
        throw new Error('Get event type error, no matched.');
    }
  }

  onError(fn: (err: Error) => void) {
    this.onErrorCallback = fn;
  }

  /**
   * Subcribe the github webhooks event.
   * @param fn Pass the eventType and data.
   */
  subscribe(fn: (eventType: GithubEventType, data: any, headers?: any) => void) {
    this.subscribeFn = fn;
  }

  /**
   * Run the webhook notify server.
   * @param {number} port 
   */
  listen(port: number) {
    return this.server.listen(port);
  }
}
