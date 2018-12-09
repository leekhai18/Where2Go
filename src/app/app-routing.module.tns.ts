import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { routes, config } from './app.routes';

@NgModule({
  imports: [  
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes, config)
  ],
  exports: [
    NativeScriptRouterModule
  ]
})
export class AppRoutingModule { }
