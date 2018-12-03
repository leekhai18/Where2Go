import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NbListModule } from '@nebular/theme/components/list/list.module';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { PostComponent } from './manage-post/post/post.component';
import { PostPlaceholderComponent } from './manage-post/post-placeholder/post-placeholder.component';
import { PostsService } from '../../@core/data/posts.service';


@NgModule({
  imports: [
    ThemeModule,
    RouterModule,
    NbListModule,
  ],
  declarations: [
    ProfileComponent,
    ManagePostComponent,
    ManageProfileComponent,
    PostComponent,
    PostPlaceholderComponent,
  ],
  providers: [
    PostsService
  ]
})
export class ProfileModule { }
