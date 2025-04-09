import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyCustomInterceptor } from './interceptor/my-custom-interceptors';

import { LogService } from './log.service';
import { Log1Service } from './log1.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(routes),

    provideHttpClient(withFetch(), withInterceptorsFromDi()),

    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyCustomInterceptor,
      multi: true
    },

    {
      provide: LogService,
      useClass: Log1Service
    },

    {
      provide: 'AliasLogger',
      useExisting: Log1Service
    }
  ]
};
