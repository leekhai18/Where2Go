import { Component, Input, OnInit, Output } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LayoutService } from '../../../@core/data/layout.service';
import { Router } from '@angular/router';
import { LocalStorage } from './../../../@core/data/local-storage-service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  @Output()

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  logedinStatus: any;

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
    private router: Router,
    protected localStorage: LocalStorage) {
  }

  ngOnInit() {
    // this.userService.getUser(1).subscribe((user) => {
    //   this.user = user;
    // });
    this.logedinStatus = localStorage.getItem('LOGEDIN') == 'true' ? true : false;

    this.userService.userActive.subscribe(user => this.user = user);

    this.menuService.onItemClick().subscribe((item) => {
      if (item.item == this.userMenu[0]) {
        this.router.navigate(['/pages/profile']);
      } else if (item.item == this.userMenu[1]) {
        this.router.navigate(['/pages/places']);
        this.localStorage.setItem('LOGEDIN', false);
        this.logedinStatus = false;
      }
    });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  login() {
    this.localStorage.setItem('LOGEDIN', true);
    this.logedinStatus = true;
  }
}
