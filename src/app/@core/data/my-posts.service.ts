import { PostsService, Post } from './posts.service';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx'

const SIZE_PAGE = 3;  

@Injectable()
export class MyPostsService {

  private data = [
    {
      title: 'Của tôi',
      active: true,
      idPosts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      posts: []
    },
    {
      title: 'Đã thích',
      idPosts: ['20', '21', '22', '23', '24'],
      posts: []
    },
    {
      title: 'Đang xử lý',
      idPosts: ['25', '26', '27', '28', '29'],
      posts: []
    },
  ];

  private posts = [];

  constructor(private postsService: PostsService) {
    this.separateData();
  }

  get getData() {
    return this.data;
  }

  // TODO: observables
  separateData() {
    this.postsService.load().subscribe(all => {
      this.posts.push(...all);

      for (let i = 0; i < this.data.length; i++) {
        let separatedPosts = [];

        for (let j = 0; j < this.data[i].idPosts.length; j++) {
          for (let k = 0; k < this.posts.length; k++) {
            if (this.data[i].idPosts[j] === this.posts[k].id) {
              separatedPosts.push(this.posts[k]);
            }
          }
        }

        this.data[i].posts = separatedPosts;
      }

      return this.data;
    });
  }

  // Use it to make the animation loading...
  loadPosts(page: number, index: number): Observable<Post[]> {
    const TOTAL_PAGES = Math.round(this.data[index].posts.length / SIZE_PAGE);
    const startIndex = ((page - 1) % TOTAL_PAGES) * SIZE_PAGE;

    let loadedPosts = [];
    loadedPosts.push(...this.data[index].posts);

    return Observable.of(loadedPosts)
      .pipe(
        map(posts => posts.splice(startIndex, SIZE_PAGE)),
        delay(1500),
      );
  }

  loadNext(cardDatas, index) {
    if (cardDatas[index].loading) { return; }

    cardDatas[index].loading = true;
    cardDatas[index].placeholders = new Array(SIZE_PAGE);
    this.loadPosts(cardDatas[index].pageToLoadNext, index)
      .subscribe(nextPosts => {
        cardDatas[index].placeholders = [];
        cardDatas[index].posts.push(...nextPosts);
        cardDatas[index].loading = false;
        cardDatas[index].pageToLoadNext++;
    });
  }
}
