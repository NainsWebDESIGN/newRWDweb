import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("preaload") preaload: ElementRef;
  @ViewChild("header") header: ElementRef;
  @ViewChild("navbar") navbar: ElementRef;
  @ViewChild("overlay") overlay: ElementRef;
  @ViewChild("heroSlider") heroSlider: ElementRef;
  @ViewChild("parallaxItem") parallaxItem: ElementRef;
  lastScrollPos: number = 0;
  sliderItem;
  lastActiveSliderItem;
  currentSliderPos: number = 0;
  autoSliderInterval;
  constructor() { }
  ngOnInit() {
    this.sliderItem = this.heroSlider.nativeElement.children;
    this.lastActiveSliderItem = this.sliderItem[0];
  }
  @HostListener('window:load', ['$event'])
  onPageLoad() {
    this.preaload.nativeElement.classList.add("loaded");
    document.body.classList.add("loaded");
    this.sliderInterval();
  }
  @HostListener('window:scroll', ['$event'])
  onPageScroll() {
    let top = window.scrollY;

    this.header.nativeElement.classList[top >= 50 ? "add" : "remove"]("active");
    if (top >= 50) {
      this.header.nativeElement.classList[this.lastScrollPos < top ? "add" : "remove"]("hide");
      this.lastScrollPos = top;
    }

  }
  @HostListener('mousemove', ['$event'])
  handleMousemove(event) {
    let children = this.parallaxItem.nativeElement.children,
      parallax = [children[0], children[1]];
    let x, y;
    x = (event.clientX / window.innerWidth) * 10 - 5;
    y = (event.clientY / window.innerHeight) * 10 - 5;
    x = x - x * 2;
    y = y - y * 2;
    for (let i = 0, len = parallax.length; i < len; i++) {
      x = x * Number(parallax[i].dataset.parallaxSpeed);
      y = y * Number(parallax[i].dataset.parallaxSpeed);
      parallax[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    }
  }
  sliderInterval() {
    clearInterval(this.autoSliderInterval);
    this.autoSliderInterval = setInterval(() => this.sliderMove(1), 7000);
  }
  toggleNavbar() {
    this.navbar.nativeElement.classList.toggle("active");
    this.overlay.nativeElement.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }
  updateSliderPos() {
    this.lastActiveSliderItem.classList.remove("active");
    this.sliderItem[this.currentSliderPos].classList.add("active");
    this.lastActiveSliderItem = this.sliderItem[this.currentSliderPos];
  }
  sliderMove(move: number) {
    switch (move) {
      case 1:
        this.currentSliderPos =
          this.currentSliderPos >= this.sliderItem.length - 1 ? 0 : this.currentSliderPos + 1;
        break;
      case -1:
        this.currentSliderPos =
          this.currentSliderPos <= 0 ? this.sliderItem.length - 1 : this.currentSliderPos - 1;
        break;
    }
    this.updateSliderPos();
  }
}
