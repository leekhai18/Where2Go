import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Post } from '../../@core/data/posts.service';

@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  @Input() post: Post;
  @Input() user: Object;

  constructor(protected ref: NbDialogRef<DetailComponent>) { }

  dismiss() {
    this.ref.close();
  }
}
