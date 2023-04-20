import { InjectionToken } from '@angular/core';
import { Reporter } from '../interfaces/reporter';

export const REPORTERS = new InjectionToken<Reporter>('reporters');
