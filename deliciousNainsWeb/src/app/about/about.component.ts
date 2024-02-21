import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
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
  @ViewChild("parallaxItem") parallaxItem: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
