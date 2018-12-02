import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';

@NgModule({
  imports: [
    ThemeModule,
    RouterModule
  ],
  declarations: [
    ProfileComponent,
    ManagePostComponent,
    ManageProfileComponent,
  ],
})
export class ProfileModule { }
