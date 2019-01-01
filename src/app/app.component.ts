/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { LocalStorage } from './@core/data/local-storage-service';

@Component({
  selector: 'root-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
    protected localStorage: LocalStorage) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();

    this.localStorage.setItem('LOGEDIN', false);
  }
}
