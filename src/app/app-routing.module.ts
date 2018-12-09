import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes, config } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
