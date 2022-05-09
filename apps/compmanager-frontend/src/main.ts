import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {enableMapSet} from 'immer'

if (environment.production) {
  enableProdMode();
}

enableMapSet();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
