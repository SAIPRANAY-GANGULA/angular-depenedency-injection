import { Logger } from '../interfaces/logger';

export const LegacyLogger: Logger = {
  prefix: 'legacy root',
  log(message: string) {
    console.warn(`${this.prefix}(Legacy)-${message}`);
  },
};
