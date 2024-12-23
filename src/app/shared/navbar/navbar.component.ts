import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  navigation = [
    { name: 'How do we help ?', href: '/how-do-we-help' },
    { name: 'Why Agency ?', href: '/why-agency' },
    { name: 'Why ME ?', href: '/why-me' }
    // { name: 'SEO', href: '/seo' },
   ];
}