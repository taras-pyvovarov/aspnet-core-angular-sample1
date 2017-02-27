//App entry point.
//Bootstraps application root module (named AppModule by convension).

import 'angular2-universal-polyfills/browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app1.module';

//Do bootstrapping.
platformBrowserDynamic().bootstrapModule(AppModule);