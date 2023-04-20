import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';
import { ParentDirective } from './parent.directive';
import { ChildDirective } from './child.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ParentDirective, ChildDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(@Self() private loggerService: LoggerService) {
    if (this.loggerService) {
      this.loggerService.log('LoggerService created');
    }
  }
}
