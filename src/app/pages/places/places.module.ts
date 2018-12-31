import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PlacesComponent } from './places.component';
import { PostsSearchComponent } from './posts-search/posts-search.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    PlacesComponent,
    PostsSearchComponent,
  ]
})
export class PlacesModule { }
