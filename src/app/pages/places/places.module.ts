import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PlacesComponent } from './places.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    PlacesComponent,
  ]
})
export class PlacesModule { }
