import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ole-directions-modal',
  templateUrl: './directions-modal.component.html',
  styleUrls: ['./directions-modal.component.scss']
})
export class DirectionsModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
