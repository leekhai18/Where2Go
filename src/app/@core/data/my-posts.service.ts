import { PostsService } from './posts.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MyPostsService {

  private data = [
    {
      title: 'Của tôi',
      active: true,
      idPosts: ['1', '2', '3'],
      posts: []
    },
    {
      title: 'Đã thích',
      idPosts: ['1', '2', '3'],
      posts: []
    },
    {
      title: 'Đang xử lý',
      idPosts: ['4', '5'],
      posts: []
    },
  ];

  constructor(private postsService: PostsService) {
  }

  // TODO: observables
  getData() {
    for (let i = 0; i < this.data.length; i++) {
      let posts = [];

      for (let j = 0; j < this.data[i].idPosts.length; j++) {
        for (let k = 0; k < this.postsService.getData().length; k++) {
          if (this.data[i].idPosts[j] === this.postsService.getData()[k].id) {
            posts.push(this.postsService.getData()[k]);
          }
        }
      }

      this.data[i].posts = posts;
    }

    return this.data;
  }
}
