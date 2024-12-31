import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-fwd-dialog',
  imports: [NgIf],
  templateUrl: './fwd-dialog.component.html',
  styleUrl: './fwd-dialog.component.css'
})

export class FwdDialogComponent {

  @Output() hideDialog : EventEmitter<any> = new EventEmitter<any>();
  @Input() isVisible: boolean = false;


  email: string = 'harsh.pachal.work@gmail.com';
  
  hide() {
      this.hideDialog.emit("");
  }
}
