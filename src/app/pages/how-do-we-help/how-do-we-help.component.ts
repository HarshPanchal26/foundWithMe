import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
// import { FwdDialogComponent } from "../../component/fwd-dialog/fwd-dialog.component";

@Component({
  selector: 'app-how-do-we-help',
  imports: [],
  templateUrl: './how-do-we-help.component.html',
  styleUrl: './how-do-we-help.component.css'
})

export class HowDoWeHelpComponent {

  @ViewChild('videoPlayer') videoplayer: any;

  // toggleVideo() {
  //   this.videoplayer.nativeElement.play();
  // }
}
