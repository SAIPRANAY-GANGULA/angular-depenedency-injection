import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggerService]
})
export class AppComponent {
  title = 'angular-dependency-injection';

  constructor(
    @Optional() private loggerService: LoggerService,
    @SkipSelf() private parentLogger: LoggerService
  ) {
    if (this.loggerService) {
      this.loggerService.prefix = 'AppComponent';
      this.loggerService.log('LoggerService created');
    }

    if (this.parentLogger) {
      this.parentLogger.prefix = 'AppComponent';
      this.parentLogger.log('ParentLogger created');
    }
  }
}
