import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../@core/data/local-storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(protected localStorage: LocalStorage, public router: Router) { }

  ngOnInit() {
    this.localStorage.setItem('LOGEDIN', true);

    this.router.navigate(['/pages/places']);
  }

}
