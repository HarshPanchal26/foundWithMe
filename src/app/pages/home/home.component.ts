import { Component, Inject, Input , PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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

export class HomeComponent{

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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

  ngOnInit(){
    // if (isPlatformBrowser(this.platformId)) {
    //   document.addEventListener("DOMContentLoaded", function () {
    //     const words = ["Business", "Idea", "Thought", "Startup", "Vision"];
    //     const dynamicText : HTMLElement | null = document.getElementById("dynamic-text");
      
    //     let wordIndex = 0;
    //     let charIndex = 0;
    //     let isDeleting = false;
      
    //     function typeEffect() {
    //       const currentWord = words[wordIndex];
    //       const displayText = isDeleting
    //         ? currentWord.slice(0, charIndex--)
    //         : currentWord.slice(0, charIndex++);

    //         if(dynamicText)
    //           dynamicText.innerText = displayText;
      
    //       if (!isDeleting && charIndex === currentWord.length) {
    //         isDeleting = true;
    //         setTimeout(typeEffect, 1000);
    //       } else if (isDeleting && charIndex === 0) {
    //         isDeleting = false;
    //         wordIndex = (wordIndex + 1) % words.length;
    //         setTimeout(typeEffect, 500);
    //       } else {
    //         setTimeout(typeEffect, isDeleting ? 50 : 150);
    //       }
    //     }
      
    //     typeEffect();
    //   });
    // }
    
  }
}
