import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class GalleryLoggerService implements LoggerService {
  prefix = 'gallery-logger';
  log(message: string) {
    console.warn(`${this.prefix}-${message}`);
  }
}
