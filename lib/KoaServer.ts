import * as http from 'http';
import * as Koa from 'koa';
import * as koaBody from 'koa-body';


export class KoaServer {
  private app: Koa;

  constructor() {
    this.app = new Koa();
    this.app.use(koaBody());
  }

  use(fn: (context: Koa.Context) => void) {
    this.app.use(fn);
  }

  listen(port: number) {
    const server = http.createServer(this.app.callback());
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

