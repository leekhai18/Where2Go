import { Injectable } from '@angular/core';

@Injectable()
export class MyPostsService {

  private data = [
    {
      title: 'Của tôi',
      active: true,
      posts: ['1', '2', '3'],
    },
    {
      title: 'Đã thích',
      posts: ['1', '2', '3'],
    },
    {
      title: 'Đang xử lý',
      posts: ['4', '5'],
    },
  ];

  constructor() {
  }

  // TODO: observables
  getData() {
    return this.data;
  }
}
