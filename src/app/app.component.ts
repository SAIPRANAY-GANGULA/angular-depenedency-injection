import { Component, Injector, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { ExperimentalLoggerService } from './services/experimental-logger.service';
import { LegacyLogger } from './services/legacy.logger';
import { APP_CONFIG } from './tokens/config.token';

@Component({
  selector: 'app-root',
  template: `
    <div appParent>
      <div appChild></div>
    </div>
  `,
  providers: [
    {
      provide: LoggerService,
      useClass: ExperimentalLoggerService,
      multi: true,
      // return new ExperimentalLoggerService(..deps)
      // Here, we are creating new instance of ExperimentalLoggerService
    },
    {
      provide: LoggerService,
      useExisting: ExperimentalLoggerService,
      multi: true,
      // In this case, we are not creating new instance of ExperimentalLoggerService
    },
    {
      provide: LoggerService,
      useValue: LegacyLogger,
      multi: true,
      // useValue is helpful when we want to provide an object-literal instead of class
      // Generally, we use them in tandem with Injection Token
    },
    {
      provide: LoggerService,
      useFactory: (injector: Injector) => {
        return injector.get(APP_CONFIG).experimentalEnabled
          ? injector.get(ExperimentalLoggerService)
          : new LoggerService();

        // Instead of declaring multiple dependencies, we can use Angular Injector to take care of dependencies
      },
      deps: [Injector],
      multi: true,
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
      // this.loggerService.prefix = 'AppComponent';
      // this.loggerService.log('LoggerService created');
      console.warn('Multiple Providers', this.loggerService);
      //@ts-ignore
      this.loggerService.forEach((s) => {
        s.prefix = 'AppComponent';
        s.log('LoggerService created');
      });
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
