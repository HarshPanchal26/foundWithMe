import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FwdDialogComponent } from "../../component/fwd-dialog/fwd-dialog.component";



@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FwdDialogComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  navigation = [
    { name: 'How do we help ?', href: '/how-do-we-help' },
    { name: 'Why Agency ?', href: '/why-agency' },
    // { name: 'Why ME ?', href: '/why-me' }
    // { name: 'SEO', href: '/seo' },
   ];

   isModalVisible : boolean = false

   makeModalHide(){
    this.isModalVisible = false
   }
   
}