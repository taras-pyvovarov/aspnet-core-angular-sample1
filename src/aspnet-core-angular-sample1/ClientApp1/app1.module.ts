//Root module, AppModule by convension.
//Angular module class describes how the application parts fit together.

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app1.component';

//Decorator function. Properties contain metadata about module.
@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        UniversalModule,// Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', component: AppComponent },
        ])
    ],
})

export class AppModule { }