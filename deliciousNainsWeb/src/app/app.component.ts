import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const preloader = document.querySelector("[data-preaload]");

    window.addEventListener("load", () => {
      preloader.classList.add("loaded");
      document.body.classList.add("loaded");
    });

    const eventElement = (el, event, back) => {
      for (let i = 0, len = el.length; i < len; i++) {
        el[i].addEventListener(event, back);
      }
    },
      navbar = document.querySelector("[data-navbar"),
      // navTogglers = document.querySelectorAll("[data-nav-toggler]"),
      overlay = document.querySelector("[data-overlay]");

    function toggleNavbar() {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    }

    const header = document.querySelector("[data-header]");

    let lastScrollPos = 0;

    const hideHeader = function () {
      const isScrollBottom = lastScrollPos < window.scrollY;
      header.classList[isScrollBottom ? "add" : "remove"]("hide");
      lastScrollPos = window.scrollY;
    };

    window.addEventListener("scroll", () => {
      header.classList[window.scrollY >= 50 ? "add" : "remove"]("active");
      if (window.scrollY >= 50) {
        hideHeader();
      }
    });

    const heroSlider = document.querySelector("[data-hero-slider]"),
      heroSliderItems = document.querySelectorAll("[data-hero-slider-item]"),
      heroSliderPrevBtn = document.querySelector("[data-prev-btn]"),
      heroSliderNextBtn = document.querySelector("[data-next-btn]");

    let currentSliderPos = 0,
      lastActiveSliderItem = heroSliderItems[0];

    const updateSliderPos = () => {
      lastActiveSliderItem.classList.remove("active");
      heroSliderItems[currentSliderPos].classList.add("active");
      lastActiveSliderItem = heroSliderItems[currentSliderPos];
    },
      sliderNext = () => {
        currentSliderPos =
          currentSliderPos >= heroSliderItems.length - 1 ? 0 : currentSliderPos + 1;
        updateSliderPos();
      },
      sliderPrev = () => {
        currentSliderPos =
          currentSliderPos <= 0 ? heroSliderItems.length - 1 : currentSliderPos - 1;
        updateSliderPos();
      };

    // heroSliderNextBtn.addEventListener("click", sliderNext());
    // heroSliderPrevBtn.addEventListener("click", sliderPrev());

    let autoSliderInterval = setInterval(() => sliderNext(), 7000);
    const autoSlide = () => {
      autoSliderInterval = setInterval(() => sliderNext(), 7000);
    };
    // addEventListener([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", () => {
    //   clearInterval(autoSliderInterval);
    // });
    // addEventListener(
    //   [heroSliderNextBtn, heroSliderPrevBtn],
    //   "mouseout",
    //   autoSlide()
    // );

    // window.addEventListener("load", autoSlide());

    const parallaxItems = document.querySelectorAll("[data-parallax-item]");
    let x, y;
    window.addEventListener("mousemove", (event) => {
      x = (event.clientX / window.innerWidth) * 10 - 5;
      y = (event.clientY / window.innerHeight) * 10 - 5;
      x = x - x * 2;
      y = y - y * 2;
      // for (let i = 0, len = parallaxItems.length; i < len; i++) {
      //   x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
      //   y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
      //   parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      // }
    });

  }
}
