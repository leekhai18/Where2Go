import { Component, OnInit, Input } from '@angular/core';
import { NewsPost } from '../services/posts.service';

@Component({
  selector: 'ngx-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: NewsPost;
  
  constructor() { }

  ngOnInit() {
  }

}
