import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-ngbd-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class NgbdModalOptionsComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content) {
    this.modalService.open(content, {size: 'lg'});
  }
}
