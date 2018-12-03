import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Post {
  id: string;
  name: string;
  address: string;
  costNeed: string;
  describe: string;
  pictures: Array<string>;
  datePosted: string;
  likeNumber: string;
  commentNumber: string;
  comments: Array<string>;
}

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {}

  load(): Observable<Post[]> {
    return this.http.get<Post[]>('assets/data/posts.json');
  }
}
