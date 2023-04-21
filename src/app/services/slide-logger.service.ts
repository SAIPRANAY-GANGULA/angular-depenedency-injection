import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SlideLoggerService {
  prefix = 'slide-logger';
  log(message: string) {
    console.warn(`${this.prefix}-${message}`);
  }
}
