import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DetailComponent } from './../detail/detail.component';

@Component({
  selector: 'ngx-places',
  templateUrl: './places.component.html'
})
export class PlacesComponent {
  constructor(private dialogService: NbDialogService) {}

  open() {
    this.dialogService.open(DetailComponent, {
      context: {
        post: {}
      },
    });
  }
}
