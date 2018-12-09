import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes, ExtraOptions } from '@angular/router';

export const routes: Routes = [
  { path: 'pages', loadChildren: '~/app/pages/pages.module#PagesModule' },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

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
