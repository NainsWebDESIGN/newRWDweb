const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", () => {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});
