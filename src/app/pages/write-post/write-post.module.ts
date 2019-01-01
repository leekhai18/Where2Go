import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { WritePostComponent } from './write-post.component';
import { FormComponent } from './form/form.component';
import { SingleImageComponent } from './single-image/single-image.component';
import { MultipleImageComponent } from './multiple-image/multiple-image.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ThemeModule,
    RouterModule
  ],
  declarations: [
    WritePostComponent,
    FormComponent,
    SingleImageComponent,
    MultipleImageComponent
  ],
})
export class WritePostModule { }
