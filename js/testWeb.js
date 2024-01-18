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
