import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS, MENU_ITEMS_NON } from './pages-menu';
import { LocalStorage } from '../@core/data/local-storage-service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu: any;

  constructor(protected localStorage: LocalStorage,
    public auth: AuthService) { }

  ngOnInit(): void {
    localStorage.getItem('LOGEDIN') == 'true' ? this.menu = MENU_ITEMS : this.menu = MENU_ITEMS_NON;

    this.localStorage.changes.subscribe((logedinStatus) => {
      if (logedinStatus.value == true) {
        this.menu = MENU_ITEMS;
      } else {
        this.menu = MENU_ITEMS_NON;
      }
    });
  }

}
