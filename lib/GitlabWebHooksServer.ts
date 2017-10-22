import * as http from 'http';
import * as Koa from 'koa';
import * as koaBody from 'koa-body';

import { IWebHooksServer } from './IWebHooksServer';

export class GitlabWebHooksServer implements IWebHooksServer {
  constructor(options?: any) {

  }

  /**
   * 启动Server
   * @param {number} port 
   */
  listen(port) {
    const app = new Koa();
    app.use(koaBody());
    app.use(context => {
      console.log(context.url, context.request, context.request.body);
    });
    const server = http.createServer(app.callback());
    return new Promise((resolve, reject) => {
      server.listen(port, err => {
        if (err) {
          return reject(err);
        }
        resolve(server);
      });
    });
  }
}
