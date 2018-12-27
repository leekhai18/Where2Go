import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class User {
  id: number;
  name: string;
  picture: string;
  email: string;
  phone: string;
}

@Injectable()
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  get(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(this.usersUrl, user, httpOptions);
  }
}
