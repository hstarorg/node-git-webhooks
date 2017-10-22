import * as crypto from 'crypto';

export const cryptoHelper = {
  hmacSha1(text: string, key: string) {
    return crypto.createHmac('sha1', key)
      .update(text)
      .digest('hex');
  }
};
