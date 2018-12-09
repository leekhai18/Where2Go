import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { PagesComponent } from './pages.component';
import { ProfileModule } from './profile/profile.module';
import { PlacesModule } from './places/places.module';
import { WritePostModule } from './write-post/write-post.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    ProfileModule,
    PlacesModule,
    WritePostModule,
    PagesRoutingModule,
    ThemeModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule { }
