export interface IWebHooksServer {
  onError(fn: (err: Error) => void);

  subscribe(fn: (eventType: any, data: any, headers?: any) => void);

  listen(port: number);
};
