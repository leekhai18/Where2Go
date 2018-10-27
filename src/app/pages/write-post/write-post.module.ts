import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { WritePostComponent } from './write-post.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    WritePostComponent
  ],
})
export class WritePostModule { }
