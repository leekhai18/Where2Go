import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { PlacesComponent } from './places.component';
import { NgbdModalOptionsComponent } from './modal/modal-options.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
  ],
  declarations: [
    PlacesComponent,
    NgbdModalOptionsComponent,
  ],
  providers: [
  ],
})
export class PlacesModule { }
