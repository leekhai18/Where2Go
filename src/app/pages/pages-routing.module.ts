import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { PlacesComponent } from './places/places.component';
import { WritePostComponent } from './write-post/write-post.component';
import { CallbackComponent } from './../callback/callback.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'places',
    component: PlacesComponent,
  }, {
    path: 'profile',
    component: ProfileComponent,
  }, {
    path: 'write-post',
    component: WritePostComponent,
  }, {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full',
  }],
},
{ path: 'callback', component: CallbackComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
