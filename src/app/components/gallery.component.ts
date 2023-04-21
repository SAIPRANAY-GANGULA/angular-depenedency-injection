import { Component } from '@angular/core';
import { GalleryLoggerService } from '../services/gallery-logger.service';

@Component({
  selector: 'app-gallery',
  template: `
    <div>
      <h1>Gallery Component</h1>
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
  // providers: [GalleryLoggerService],
  viewProviders: [GalleryLoggerService],
  // View providers is not available for projected content.
  // They are only limited to current component or current component children.
})
export class GalleryComponent {
  constructor(private loggerService: GalleryLoggerService) {
    this.loggerService.log('Gallery Initialized');
  }
}
