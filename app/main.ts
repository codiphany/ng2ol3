/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {AppModule} from './app.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);