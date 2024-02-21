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
  @ViewChild("preaload") preaload: ElementRef;
  constructor() { }
  ngOnInit() {
  }
}
