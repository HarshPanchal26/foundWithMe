import { Component, Input, Output , EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-fwd-dialog',
  imports: [NgIf],
  templateUrl: './fwd-dialog.component.html',
  styleUrl: './fwd-dialog.component.css'
})

export class FwdDialogComponent {

  @Output() hideDialog  = new EventEmitter<boolean>();
  @Input() isVisible: boolean = false;

  email: string = 'harsh.panchal.work@gmail.com';
  phone_number: string = '+9104882613';
  address: string = 'Surat, Gujarat, India';
  
  hide() {
      this.hideDialog.emit(false);
  }
}
