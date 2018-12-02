import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../../@core/data/users.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'ngx-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {

  user: any;

  enableEditName = false;
  enableEditEmail = false;
  enableEditPhone = false;

  constructor(private userService: UserService,
              @Inject(DOCUMENT) document) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  editName() {
    if (this.enableEditName) {
      this.enableEditName = false;
      this.user.name = (<HTMLInputElement>document.getElementById('inputName')).value;
    } else {
      this.enableEditName = true;
    }
  }

  editEmail() {
    if (this.enableEditEmail) {
      this.enableEditEmail = false;
      this.user.name = (<HTMLInputElement>document.getElementById('inputEmail')).value;
    } else {
      this.enableEditEmail = true;
    }
  }

  editPhone() {
    if (this.enableEditPhone) {
      this.enableEditPhone = false;
      this.user.name = (<HTMLInputElement>document.getElementById('inputPhone')).value;
    } else {
      this.enableEditPhone = true;
    }
  }

}
