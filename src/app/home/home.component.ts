import { Component, AfterViewInit, ElementRef, ViewChild, HostListener, OnInit, Renderer2 } from '@angular/core';
declare var $: any;
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Typed from 'typed.js';

declare global {
  interface JQuery {
    owlCarousel(options?: any): any;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChild('carousel') carousel!: ElementRef;

  ngAfterViewInit(): void {
    $(this.carousel.nativeElement).owlCarousel({
      // Owl Carousel options
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  }
  constructor(private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Sticky navbar on scroll script
    if (this.el.nativeElement.ownerDocument.defaultView.scrollY > 20) {
      this.el.nativeElement.ownerDocument.querySelector('.navbar').classList.add('sticky');
    } else {
      this.el.nativeElement.ownerDocument.querySelector('.navbar').classList.remove('sticky');
    }

    // Scroll-up button show/hide script
    if (this.el.nativeElement.ownerDocument.defaultView.scrollY > 500) {
      this.el.nativeElement.ownerDocument.querySelector('.scroll-up-btn').classList.add('show');
    } else {
      this.el.nativeElement.ownerDocument.querySelector('.scroll-up-btn').classList.remove('show');
    }
  }

  scrollToTop() {
    // Scroll to top animation
    const htmlElement = this.el.nativeElement.ownerDocument.querySelector('html');
    htmlElement.animate({ scrollTop: 0 });

    // Removing smooth scroll on slide-up button click
    htmlElement.style.scrollBehavior = 'auto';
  }

  smoothScrollOnMenuItemClick() {
    // Applying smooth scroll on menu items click
    this.el.nativeElement.ownerDocument.querySelector('html').style.scrollBehavior = 'smooth';
  }

  toggleMenu() {
    // Toggle menu/navbar script
    const menu = this.el.nativeElement.ownerDocument.querySelector('.navbar .menu');
    const menuBtnIcon = this.el.nativeElement.ownerDocument.querySelector('.menu-btn i');

    menu.classList.toggle('active');
    menuBtnIcon.classList.toggle('active');
  }


  // Emailjs
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_gco03z6', 'template_nbudajj', e.target as HTMLFormElement, 'F_AtDieGcB_2Z6M1v')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }



  ngOnInit(): void {
    const options = {
      strings: ["Front end developer", "Experienced in Angular", "Technician", "Designer", "Angular Web Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    const typed1 = new Typed(".typing", options);
    const typed2 = new Typed(".typing-2", options);

    const options2 = {
      strings: ["Connect with me on  "],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    const typed3 = new Typed(".typing-3", options2);
  }
   
}
