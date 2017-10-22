export interface IWebHooksServer {
  onError(fn: (err: Error) => void);
};
