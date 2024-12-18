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
      name: 'Marketing',
      description: 'Strategic digital marketing solutions',
      href: '/assets/images/marketing-thumb.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ocYAz_fP15VXieo8g4Gxtf8V1zuPJvS3tCP72JpyeyyYL6yzQPza8iFnm8JxonbDZ4&usqp=CAU'
    },
    {
      name: 'Branding',
      description: 'Build and evolve your brand identity',
      href: '/assets/images/branding-thumb.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ocYAz_fP15VXieo8g4Gxtf8V1zuPJvS3tCP72JpyeyyYL6yzQPza8iFnm8JxonbDZ4&usqp=CAU'
      
    },
    {
      name: 'SEO',
      description: 'Improve your search engine visibility',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ocYAz_fP15VXieo8g4Gxtf8V1zuPJvS3tCP72JpyeyyYL6yzQPza8iFnm8JxonbDZ4&usqp=CAU',
      href: '/services/seo'
    },
    {
      name: 'Tech Support',
      description: 'Comprehensive technical solutions',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ocYAz_fP15VXieo8g4Gxtf8V1zuPJvS3tCP72JpyeyyYL6yzQPza8iFnm8JxonbDZ4&usqp=CAU',
      href: '/services/tech-support'
    },
    {
      name: 'Growth',
      description: 'Scale your business with proven strategies',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ocYAz_fP15VXieo8g4Gxtf8V1zuPJvS3tCP72JpyeyyYL6yzQPza8iFnm8JxonbDZ4&usqp=CAU',
      href: '/services/growth'
    },
    {
      name: "CEO's Office",
      description: 'Executive support and strategic planning',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ocYAz_fP15VXieo8g4Gxtf8V1zuPJvS3tCP72JpyeyyYL6yzQPza8iFnm8JxonbDZ4&usqp=CAU',
      href: '/services/ceo-office'
    }
  ];
}
