import 'angular2-universal-polyfills';
import 'zone.js';
import { createServerRenderer } from 'aspnet-prerendering';
import { enableProdMode } from '@angular/core';
import { platformNodeDynamic } from 'angular2-universal';
import { AppModule } from './app1.module';

enableProdMode();
const platform = platformNodeDynamic();

export default createServerRenderer(params => {
    return new Promise((resolve, reject) => {
        const requestZone = Zone.current.fork({
            name: 'angular-universal request',
            properties: {
                baseUrl: '/',
                requestUrl: params.url,
                originUrl: params.origin,
                preboot: false,
                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
                // Waiting on https://github.com/angular/universal/issues/347
                document: '<!DOCTYPE html><html><head></head><body><client-app1></client-app1></body></html>'
            },
            onHandleError: (parentZone, currentZone, targetZone, error) => {
                // If any error occurs while rendering the module, reject the whole operation
                reject(error);
                return true;
            }
        });

        return requestZone.run<Promise<string>>(() => platform.serializeModule(AppModule)).then(html => {
            resolve({ html: html });
        }, reject);
    });
});

//export default createServerRenderer(params => {
//    return new Promise((resolve, reject) => {
//        const result = ` 
//            <h1>My awesome headline!</h1> 
//            <p>Node time is: ${ new Date()}</p> 
//            <p>Request path: ${ params.location.path}</p> 
//            <p>Absolute URL: ${ params.absoluteUrl}</p>`

//        resolve({
//            html: result, globals: {
//                companies: [1, 2, 3]
//            }
//        });
//    });
//});