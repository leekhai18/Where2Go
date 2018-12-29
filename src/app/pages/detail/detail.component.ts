import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Post } from '../../@core/data/posts.service';
import { CommentsService, Comment } from '../../@core/data/comments.service';
import { UserService, User } from './../../@core/data/users.service';

@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @ViewChild('commentcontainer') private commentcontainer: ElementRef;

  @Input() post: Post;
  user: User;
  comments: Array<Comment>;

  constructor(protected ref: NbDialogRef<DetailComponent>,
    private commentsService: CommentsService,
    private userService: UserService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.commentsService.get().subscribe((comments) => {
      this.comments = comments.filter(comment => comment.postId == this.post.id);

      this.comments.forEach(comment => {
        this.userService.getUser(comment.userId).subscribe((user) => {
          comment.user = user;
        });
      });
    });

    this.userService.getUser(this.post.userId).subscribe((user) => {
      this.user = user;
    });
  }

  dismiss() {
    this.ref.close();
  }

  onEnter(value: string) {
    const cmt = {
      postId: this.post.id,
      userId: this.user.id,
      content: value,
      user: this.user
    };

    this.commentsService.addComment(cmt as Comment).subscribe((response) => {
      this.comments.push(response);

      setTimeout(() => {
        this.commentContainerScrollToBottom();
      }, 100);
    });
  }

  commentContainerScrollToBottom(): void {
    try {
      this.commentcontainer.nativeElement.scrollTop = this.commentcontainer.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  }
}
