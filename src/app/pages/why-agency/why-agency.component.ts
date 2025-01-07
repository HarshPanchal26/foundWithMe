import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FwdDialogComponent } from "../../component/fwd-dialog/fwd-dialog.component";

@Component({
  selector: 'app-why-agency',
  imports: [NgIf, FwdDialogComponent],
  templateUrl: './why-agency.component.html',
  styleUrl: './why-agency.component.css'
})

export class WhyAgencyComponent {

  isModalVisible: boolean = false;

  toggleModal(value : boolean){
    this.isModalVisible = value
  }
}
