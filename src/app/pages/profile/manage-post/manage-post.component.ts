import { Component, OnInit } from '@angular/core';
import { ElectricityService } from '../../../@core/data/electricity.service';

@Component({
  selector: 'ngx-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.scss']
})
export class ManagePostComponent implements OnInit {

  data: Array<any>;

  constructor(private eService: ElectricityService) {
    this.data = this.eService.getData();
  }

  ngOnInit() {
  }

}
