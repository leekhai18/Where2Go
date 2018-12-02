import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'ngx-post-placeholder',
  templateUrl: './post-placeholder.component.html',
  styleUrls: ['./post-placeholder.component.scss']
})
export class PostPlaceholderComponent implements OnInit {


  @HostBinding('attr.aria-label')
  label = 'Loading';
  
  constructor() { }

  ngOnInit() {
  }

}
