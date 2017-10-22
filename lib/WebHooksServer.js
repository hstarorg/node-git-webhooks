const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('koa-router')();

class WebHooksServer {
  constructor(options) {

  }

  /**
   * 启动Server
   * @param {number} port 
   */
  listen(port) {
    const app = new Koa();
    app.use(koaBody());
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

module.exports = WebHooksServer;
