import { Component, OnInit } from '@angular/core';
import { MyPostsService } from '../../../@core/data/my-posts.service';
import { PostsService } from './../../../@core/data/posts.service';

@Component({
  selector: 'ngx-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.scss']
})
export class ManagePostComponent implements OnInit {

  data: Array<any>;

  constructor(private myPostsService: MyPostsService) {
    this.data = this.myPostsService.getData();
    console.log(this.data);
  }

  ngOnInit() {
  }

}
