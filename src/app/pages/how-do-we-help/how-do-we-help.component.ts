import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FwdDialogComponent } from "../../component/fwd-dialog/fwd-dialog.component";
// import { FwdDialogComponent } from "../../component/fwd-dialog/fwd-dialog.component";

@Component({
  selector: 'app-how-do-we-help',
  imports: [FwdDialogComponent , NgIf],
  templateUrl: './how-do-we-help.component.html',
  styleUrl: './how-do-we-help.component.css'
})

export class HowDoWeHelpComponent {

  @ViewChild('videoPlayer') videoplayer: any;

  isModalVisible: boolean = false;

  toggleModal(value : boolean){
    this.isModalVisible = value
  }

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
}
