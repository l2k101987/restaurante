import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
export function BaseUrl(){
  return 'https://localhost:5001/api/';
}

const providers =[{provide:BaseUrl,useFactory:BaseUrl,deps: []}];
if (environment.production) {
  enableProdMode();
}



platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
