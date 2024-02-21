import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  @HostListener('window:load', ['$event'])
  loadInterval() {
    this.sliderInterval();
  }
  @ViewChild("heroSlider") heroSlider: ElementRef;
  sliderItem;
  lastActiveSliderItem;
  currentSliderPos: number = 0;
  autoSliderInterval;
  constructor() { }
  ngOnInit() {
    this.sliderItem = this.heroSlider.nativeElement.children;
    this.lastActiveSliderItem = this.sliderItem[0];
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
  sliderInterval() {
    clearInterval(this.autoSliderInterval);
    this.autoSliderInterval = setInterval(() => this.sliderMove(1), 7000);
  }

}
