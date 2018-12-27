import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class User {
  id: string;
  name: string;
  picture: string;
  email: string;
  phone: string;
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  load(): Observable<User[]> {
    return this.http.get<User[]>('assets/data/users.json');
  }
}
