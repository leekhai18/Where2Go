import { Component, OnInit } from '@angular/core';
import { MyPostsService } from '../../../@core/data/my-posts.service';

@Component({
  selector: 'ngx-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.scss']
})
export class ManagePostComponent implements OnInit {

  data: Array<any>;

  constructor(private eService: MyPostsService) {
    this.data = this.eService.getData();
  }

  ngOnInit() {
  }

}
