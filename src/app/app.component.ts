import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LegacyLogger } from './legacy.logger';
import { APP_CONFIG, AppConfig } from './config.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: LoggerService,
      useClass: ExperimentalLoggerService,
      // return new ExperimentalLoggerService(..deps)
      // Here, we are creating new instance of ExperimentalLoggerService
    },
    {
      provide: LoggerService,
      useExisting: ExperimentalLoggerService,
      // In this case, we are not creating new instance of ExperimentalLoggerService
    },
    {
      provide: LoggerService,
      useValue: LegacyLogger,
      // useValue is helpful when we want to provide an object-literal instead of class
      // Generally, we use them in tandem with Injection Token
    },
    {
      provide: LoggerService,
      useFactory: (appConfig: AppConfig) => {
        return appConfig.experimentalEnabled
          ? new ExperimentalLoggerService(appConfig)
          : new LoggerService();
      },
      deps: [APP_CONFIG],
      // useFactory provider is very convenient if you do not know which service to provide
      // in advance and this could be known only during the run time and this is quite often
      // happens when you need to configure provider based on the value from another service or
      // dependency injection token
    },
  ],
})
export class AppComponent {
  title = 'angular-dependency-injection';

  constructor(
    @Optional() private loggerService: LoggerService,
    @SkipSelf() private parentLoggerService: LoggerService,
    private experimentalLoggerService: ExperimentalLoggerService
  ) {
    if (this.loggerService) {
      this.loggerService.prefix = 'AppComponent';
      this.loggerService.log('LoggerService created');
    }

    if (this.parentLoggerService) {
      this.parentLoggerService.prefix = 'AppComponent';
      this.parentLoggerService.log('ParentLoggerService created');
    }

    console.warn(
      'Is both the instance is same:',
      this.loggerService === this.experimentalLoggerService
    );
  }
}
