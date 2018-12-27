import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

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

  // Temporatory
  private data = {
    id: 1,
    name: 'Lê Khải',
    picture: 'assets/images/users/leekhai.png',
    email: 'leekhai18@gmail.com',
    phone: '0328372204'
  };
  private user: BehaviorSubject<User> = new BehaviorSubject(this.data);
  userActive = this.user.asObservable();
  // Temporatory

  constructor(private http: HttpClient) {
  }

  get(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  update(user: User): Observable<User> {
    this.user.next(user);
    return this.http.put<User>(this.usersUrl, user, httpOptions);
  }
}
