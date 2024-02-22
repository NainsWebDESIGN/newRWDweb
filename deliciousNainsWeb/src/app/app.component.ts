import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @HostListener('window:load', ['$event'])
  onPageLoad() {
    this.preaload.nativeElement.classList.add("loaded");
    document.body.classList.add("loaded");
  }

  @HostListener('window:scroll', ['$event'])
  toTopScroll() {
    this.toTop.nativeElement.classList[window.scrollY >= 50 ? "add" : "remove"]("active");
  }
  @ViewChild("preaload") preaload: ElementRef;
  @ViewChild("toTop") toTop: ElementRef;
  constructor() { }
  ngOnInit() {
  }
}
