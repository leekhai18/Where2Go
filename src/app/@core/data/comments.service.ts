import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users.service';

export class Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
  user: User
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentsService {
  private commentsUrl = 'api/comments';

  constructor(private http: HttpClient) { }

  get(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentsUrl, comment, httpOptions);
  }
}
