import { NbDialogService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { MyPostsService } from '../../../@core/data/my-posts.service';
import { DetailComponent } from '../../detail/detail.component';
import { UserService } from '../../../@core/data/users.service';


@Component({
  selector: 'ngx-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.scss']
})
export class ManagePostComponent implements OnInit {
  user: any;
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

  constructor(private myPostsService: MyPostsService,
              private dialogService: NbDialogService,
              private userService: UserService) {
    this.data = this.myPostsService.getData;
  }

  ngOnInit() {
    this.userService.getUser(1).subscribe((user) => {
      this.user = user;
    });
  }

  loadNext(cardDatas, index) {
    this.myPostsService.loadNext(cardDatas, index);
  }

  openDetailDialog(post) {
    this.dialogService.open(DetailComponent, {
      context: {
        post: post,
      },
    });
  }

  viewDetail(post) {
    this.openDetailDialog(post);
  }
}
