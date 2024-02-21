import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onPageScroll() {
    let top = window.scrollY;

    this.header.nativeElement.classList[top >= 50 ? "add" : "remove"]("active");
    if (top >= 50) {
      this.header.nativeElement.classList[this.lastScrollPos < top ? "add" : "remove"]("hide");
      this.lastScrollPos = top;
    }

  }
  @ViewChild("header") header: ElementRef;
  @ViewChild("navbar") navbar: ElementRef;
  @ViewChild("overlay") overlay: ElementRef;
  lastScrollPos: number = 0;
  constructor() { }
  ngOnInit() {
  }
  toggleNavbar() {
    this.navbar.nativeElement.classList.toggle("active");
    this.overlay.nativeElement.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }

}
