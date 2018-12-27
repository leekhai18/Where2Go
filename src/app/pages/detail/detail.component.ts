import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Post } from '../../@core/data/posts.service';
import { CommentsService } from '../../@core/data/comments.service';
import { UserService } from './../../@core/data/users.service';

@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() post: Post;
  user: Object;
  comments: any;

  constructor(protected ref: NbDialogRef<DetailComponent>,
    private commentsService: CommentsService,
    private userService: UserService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.commentsService.load().subscribe((comments) => {
      this.comments = comments.filter(comment => comment.postId == this.post.id);

      this.userService.load().subscribe((users) => {
        this.user = users.find(user => user.id == this.post.userId);

        this.comments.forEach(comment => {
          comment.user = users.find(user => user.id == comment.userId);
        });
      });
    });

   
  }

  dismiss() {
    this.ref.close();
  }
}
