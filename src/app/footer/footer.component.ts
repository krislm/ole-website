import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ContactModalComponent} from "../contact-modal/contact-modal.component";
import {DirectionsModalComponent} from "../directions-modal/directions-modal.component";

@Component({
  selector: 'ole-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }


  openContactModal() {
    const contactModalRef = this.modalService.open(ContactModalComponent);
  }

  openDirectionsModal() {
    const directionsModalRef = this.modalService.open(DirectionsModalComponent)
  }
}
