import { InjectionToken } from '@angular/core';

export const BackendBaseUrl = new InjectionToken<string>('BaseUrl', {
  providedIn: 'root',
  factory: () => '/api',
});
