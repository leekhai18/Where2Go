import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  get(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  /* GET posts whose name contains search term */
  searchPosts(term: string): Observable<Post[]> {
    if (!term.trim()) {
      // if not search term, return empty posts array.
      return of([]);
    }

    return this.http.get<Post[]>(`${this.postsUrl}/?name=${term}`);
  }
}
