import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { MyPostsService } from './my-posts.service';
import { PostsService } from './posts.service';
import { StateService } from './state.service';
import { LayoutService } from './layout.service';
import { CommentsService } from './comments.service';

const SERVICES = [
  UserService,
  MyPostsService,
  PostsService,
  StateService,
  LayoutService,
  CommentsService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
