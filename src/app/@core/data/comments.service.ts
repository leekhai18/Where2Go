import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
}

@Injectable()
export class CommentsService {
  private commentsUrl = 'api/comments';

  constructor(private http: HttpClient) { }

  get(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl);
  }
}
