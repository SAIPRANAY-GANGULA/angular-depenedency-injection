import { Injectable } from '@angular/core';
import { Logger } from './logger';
import { ExperimentalLoggerService } from './experimental-logger.service';

@Injectable({
  providedIn: 'root',
  useClass: ExperimentalLoggerService,
})
export class LoggerService implements Logger {
  prefix = 'root';
  log(message: string) {
    console.warn(`${this.prefix}-${message}`);
  }
}
