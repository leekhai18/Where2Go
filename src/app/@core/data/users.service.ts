import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

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
    name: '',
    picture: '',
    email: '',
    phone: '0328372204'
  };
  private user: BehaviorSubject<User> = new BehaviorSubject(this.data);
  userActive = this.user.asObservable();
  // Temporatory

  constructor(private http: HttpClient, public auth: AuthService) {
    setTimeout(() => {
      if (localStorage.getItem('LOGEDIN') == 'true') {
        if (this.auth.userProfile) {
          this.data.name = this.auth.userProfile.nickname;
          this.data.picture = this.auth.userProfile.picture;
          this.data.email = this.auth.userProfile.name;
        } else {
          this.auth.getProfile((err, profile) => {
            this.data.name = profile.nickname;
            this.data.picture = profile.picture;
            this.data.email = profile.name;
          });
        }
      }
    }, 1000);
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
