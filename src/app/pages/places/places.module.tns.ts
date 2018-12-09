import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PlacesComponent } from './places.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    PlacesComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PlacesModule { }
