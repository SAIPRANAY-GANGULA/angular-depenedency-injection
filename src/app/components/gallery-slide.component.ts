import { Component } from '@angular/core';
import { GalleryLoggerService } from '../services/gallery-logger.service';

@Component({
  selector: 'app-gallery-slide',
  template: ` <h3>I'm a Slide</h3> `,
  styles: [],
})
export class GallerySlideComponent {
  constructor(private loggerService: GalleryLoggerService) {
    this.loggerService.log('Slide Initialized');
  }
}
