import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PlacesComponent } from './places.component';
import { NgbdModalOptionsComponent } from './modal/modal-options.component';
import {ModalWideComponent} from './modal-wide/modal-wide.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    ThemeModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    PlacesComponent,
    NgbdModalOptionsComponent,
    ModalWideComponent,
  ],
})
export class PlacesModule { }
