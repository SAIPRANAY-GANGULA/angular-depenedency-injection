import { Directive, Optional, Self } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appParent]',
  providers: [LoggerService]
})
export class ParentDirective {
  constructor(@Optional() @Self() private loggerService: LoggerService) {
    if (this.loggerService) {
      this.loggerService.prefix = 'Parent Directive';
    }
  }
}
