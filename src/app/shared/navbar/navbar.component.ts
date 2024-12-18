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
    { name: 'Marketing', href: '/services/marketing' },
    { name: 'Branding', href: '/services/branding' },
    { name: 'SEO', href: '/services/seo' },
    { name: 'Tech Support', href: '/services/tech-support' },
    { name: 'Growth', href: '/services/growth' },
    { name: "CEO's Office", href: '/services/ceo-office' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
}
