import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent , NavbarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'foundwithme';
}
