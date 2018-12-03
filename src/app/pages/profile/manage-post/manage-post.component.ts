import { Component, OnInit } from '@angular/core';
import { MyPostsService } from '../../../@core/data/my-posts.service';


@Component({
  selector: 'ngx-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.scss']
})
export class ManagePostComponent implements OnInit {

  data: Array<any>;

  cards = [{
    posts: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  }, {
    posts: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  }, {
    posts: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  }];

  constructor(private myPostsService: MyPostsService) {
    this.data = this.myPostsService.getData;
  }

  ngOnInit() {
  }

  loadNext(cardDatas, index) {
    this.myPostsService.loadNext(cardDatas, index);
  }

}
