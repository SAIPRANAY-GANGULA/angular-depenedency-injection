import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { ParentDirective } from './directives/parent.directive';
import { ChildDirective } from './directives/child.directive';
import { HttpClientModule } from '@angular/common/http';
import { REPORTERS } from './tokens/reporter.token';
import { BrowserReporterService } from './services/browser-reporter.service';
import { EngagingReporterService } from './services/engaging-reporter.service';

@NgModule({
  declarations: [AppComponent, ParentDirective, ChildDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: REPORTERS,
      useClass: BrowserReporterService,
      multi: true,
    },
    {
      provide: REPORTERS,
      useClass: EngagingReporterService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(@Self() private loggerService: LoggerService) {
    if (this.loggerService) {
      this.loggerService.log('LoggerService created');
    }
  }
}
