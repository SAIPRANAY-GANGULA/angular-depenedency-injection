import { Inject, inject, Injectable } from '@angular/core';
import { Logger } from './logger';
import { APP_CONFIG, AppConfig } from './config.token';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  // private config = inject(APP_CONFIG);

  constructor(
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    private http: HttpClient
  ) {
    // console.warn(
    //   'ExperimentalLoggerService --> constructor --> config',
    //   this.config,
    //   this.appConfig,
    //   this.appConfig === this.config
    // );
  }

  prefix = 'root';
  log(message: string) {
    console.warn(`${this.prefix}(Experimental)-${message}`);
  }
}
