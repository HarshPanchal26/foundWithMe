import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear = new Date().getFullYear();
  email: string = 'harsh.panchal.work@gmail.com';
  phone_number: string = '+91 9104882613';
  address: string = 'Surat, Gujarat, India';
}
