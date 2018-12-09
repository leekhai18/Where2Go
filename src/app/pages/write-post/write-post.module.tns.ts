import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { WritePostComponent } from './write-post.component';
import { FormComponent } from './form/form.component';
import { SingleImageComponent } from './single-image/single-image.component';
import { MultipleImageComponent } from './multiple-image/multiple-image.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    WritePostComponent,
    FormComponent,
    SingleImageComponent,
    MultipleImageComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WritePostModule { }
