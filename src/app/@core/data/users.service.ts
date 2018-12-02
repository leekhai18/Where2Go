
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';


let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'Lê Khải', picture: 'assets/images/nick.png', email: 'leekhai18@gmail.com', phone: '0328372204' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png', email: 'leekhai18@gmail.com', phone: '0328372204' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png', email: 'leekhai18@gmail.com', phone: '0328372204' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png', email: 'leekhai18@gmail.com', phone: '0328372204' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png', email: 'leekhai18@gmail.com', phone: '0328372204' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png', email: 'leekhai18@gmail.com', phone: '0328372204' },
  };

  private userArray: any[];

  constructor() {
    this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getUserArray(): Observable<any[]> {
    return observableOf(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return observableOf(this.userArray[counter]);
  }
}
