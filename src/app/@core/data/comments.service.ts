import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Comment {
  id: string;
  postId: string;
  userId: string;
  content: string;
}

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) { }

  load(): Observable<Comment[]> {
    return this.http.get<Comment[]>('assets/data/comments.json');
  }
}
