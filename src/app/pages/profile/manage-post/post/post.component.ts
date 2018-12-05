import { Post } from './../../../../@core/data/posts.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'ngx-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  
  constructor() { }

  ngOnInit() {
  }

}
