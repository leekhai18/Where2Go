import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Post {
  id: number;
  name: string;
  address: string;
  costNeed: string;
  describe: string;
  pictures: Array<string>;
  datePosted: string;
  likeNumber: string;
  commentNumber: string;
  status: string;
  reviewNumber: string;
  rate: string;
  userId: number;
}

@Injectable()
export class PostsService {
  private postsUrl = 'api/posts';

  constructor(private http: HttpClient) {}

  get(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
