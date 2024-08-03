import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  provideHttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore,provideState } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    BsModalService,
    Ng2SearchPipeModule,
     provideAnimationsAsync(),
    provideStore(),
    provideState({name:"counter",reducer:counterReducer})
  ],

};
