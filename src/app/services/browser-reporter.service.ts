import { Injectable } from '@angular/core';
import { Reporter } from '../interfaces/reporter';

@Injectable({
  providedIn: 'root',
})
export class BrowserReporterService implements Reporter {
  report(): void {
    console.warn(`Browser Report:
    browser-width: ${window.innerWidth}
    browser-height: ${window.innerHeight}
    `);
  }
}
