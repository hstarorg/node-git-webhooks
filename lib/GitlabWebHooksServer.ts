import * as Koa from 'koa';
import { IWebHooksServer } from './IWebHooksServer';
import { KoaServer } from './KoaServer';
import { ServerOptions } from './ServerOptions';
import { GitlabEventType } from './GitlabEventType';

export class GitlabWebHooksServer implements IWebHooksServer {
  private server: KoaServer;
  private onErrorCallback: (err: Error) => void;
  private subscribeFn: (eventType: GitlabEventType, data: any) => void;

  constructor(private options?: ServerOptions) {
    this.options = options || {};
    this.server = new KoaServer();
    this.server.use(this._processRequest.bind(this));
  }

  private _processRequest(context: Koa.Context) {
    const gitlabEvent = context.headers['x-gitlab-event'];
    const gitlabToken = context.headers['x-gitlab-token'];
    // 校验Secret Token
    if (this.options.token && this.options.token !== gitlabToken) {
      this.onErrorCallback && this.onErrorCallback(new Error('Invalid secret token.'));
      context.status = 204;
      context.body = '';
      return;
    }
    const body = context.request.body;
    const eventType = this._getEventType(gitlabEvent, body);
    this.subscribeFn && this.subscribeFn.call(null, eventType, body);
    context.status = 204;
    context.body = '';
  }

  private _getEventType(gitlabEvent: string, body: any): GitlabEventType {
    switch (gitlabEvent) {
      case 'Push Hook':
        return GitlabEventType.Push;
      case 'Tag Push Hook':
        return GitlabEventType.TagPush;
      case 'Issue Hook':
        return GitlabEventType.Issue;
      case 'Merge Request Hook':
        return GitlabEventType.MergeRequest;
      case 'Wiki Page Hook':
        return GitlabEventType.Wiki;
      case 'Pipeline Hook':
        return GitlabEventType.Pipeline;
      case 'Build Hook':
        return GitlabEventType.Build;
      case 'Note Hook':
        if (body.commit) {
          return GitlabEventType.CommitNote;
        } else if (body.merge_request) {
          return GitlabEventType.MergeRequestNote;
        } else if (body.snippet) {
          return GitlabEventType.SnippetNote;
        } else if (body.issue) {
          return GitlabEventType.IssueNote;
        }
      default:
        throw new Error('Get event type error, no matched.');
    }
  }

  onError(fn: (err: Error) => void) {
    this.onErrorCallback = fn;
  }

  subscribe(fn: (eventType: GitlabEventType, data: any) => void) {
    this.subscribeFn = fn;
  }

  /**
   * 启动Server
   * @param {number} port 
   */
  listen(port: number) {
    return this.server.listen(port);
  }
}
