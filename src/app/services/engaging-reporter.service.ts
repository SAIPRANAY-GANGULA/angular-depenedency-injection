import { Injectable } from '@angular/core';
import { Reporter } from '../interfaces/reporter';

@Injectable({
  providedIn: 'root',
})
export class EngagingReporterService implements Reporter {
  report(): void {
    console.warn('EngagingReport: User has been using the App since .... secs');
  }
}
