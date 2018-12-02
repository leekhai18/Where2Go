import { Component, OnInit } from '@angular/core';
import { MyPostsService } from '../../../@core/data/my-posts.service';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'ngx-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.scss']
})
export class ManagePostComponent implements OnInit {

  data: Array<any>;

  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  constructor(private myPostsService: MyPostsService,
              private postsService: PostsService) {

    this.data = this.myPostsService.getData();
  }

  ngOnInit() {
  }

  loadNext(cardData) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.postsService.load(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }

}
