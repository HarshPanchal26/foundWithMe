import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

type services = {
  name: string,
  description: string,
  image: string,
  href: string
}

@Component({
  selector: 'app-home',
  imports: [NgFor,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  services :services[] = [
    {
      name: 'Data Driven Approach',
      description: 'Data Driven Approach',
      href: '/assets/images/marketing-thumb.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ocYAz_fP15VXieo8g4Gxtf8V1zuPJvS3tCP72JpyeyyYL6yzQPza8iFnm8JxonbDZ4&usqp=CAU'
    },
    {
      name: 'Tech Adoption',
      description: 'Tech Adoption',
      href: '/assets/images/branding-thumb.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ocYAz_fP15VXieo8g4Gxtf8V1zuPJvS3tCP72JpyeyyYL6yzQPza8iFnm8JxonbDZ4&usqp=CAU'
      
    },
    {
      name: 'Mindful Marketing',
      description: 'Mindful marketing',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ocYAz_fP15VXieo8g4Gxtf8V1zuPJvS3tCP72JpyeyyYL6yzQPza8iFnm8JxonbDZ4&usqp=CAU',
      href: '/services/seo'
    },
    {
      name: "Management",
      description: 'Management for everything',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ocYAz_fP15VXieo8g4Gxtf8V1zuPJvS3tCP72JpyeyyYL6yzQPza8iFnm8JxonbDZ4&usqp=CAU',
      href: '/services/ceo-office'
    }
  ];
}
