import { Directive, Host } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {
  constructor(@Host() private loggerService: LoggerService) {
    this.loggerService.log('Child directive constructor');
  }
}
