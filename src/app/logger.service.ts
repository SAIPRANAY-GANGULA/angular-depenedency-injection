import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  prefix = 'root';
  log(message: string) {
    console.warn(`${this.prefix}-${message}`);
  }
}
