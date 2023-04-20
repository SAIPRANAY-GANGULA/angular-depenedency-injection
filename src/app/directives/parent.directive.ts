import { Directive, Inject, Optional, Self } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { REPORTERS } from '../tokens/reporter.token';
import { Reporter } from '../interfaces/reporter';

@Directive({
  selector: '[appParent]',
  providers: [LoggerService],
})
export class ParentDirective {
  constructor(
    @Optional() @Self() private loggerService: LoggerService,
    @Inject(REPORTERS) private reporters1: ReadonlyArray<Reporter>
  ) {
    if (this.loggerService) {
      this.loggerService.prefix = 'Parent Directive';
    }

    this.reporters1.forEach((r) => r.report());
  }
}
