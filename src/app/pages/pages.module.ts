import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ProfileModule } from './profile/profile.module';
import { PlacesModule } from './places/places.module';
import { WritePostModule } from './write-post/write-post.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    ProfileModule,
    PlacesModule,
    WritePostModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
