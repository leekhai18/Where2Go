import { PostsService, Post } from './../../@core/data/posts.service';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DetailComponent } from './../detail/detail.component';

@Component({
  selector: 'ngx-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  private posts: Array<Post>;

  ngOnInit(): void {
    this.postsService.get().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  constructor(private dialogService: NbDialogService,
    private postsService: PostsService) { }

  open() {
    this.dialogService.open(DetailComponent, {
      context: {
        post: {}
      },
    });
  }
}
