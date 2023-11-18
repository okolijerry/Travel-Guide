'use strict';

window.addEventListener("scroll", () => {
  document.querySelector("").classList.toggle("window-scrolled", window.scrollY > 0)
})

const overlay = document.querySelector("[data-overlay]");
const navOpen = document.querySelector("[data-nav-open-btn]");
const navBar = document.querySelector("[data-navbar]");
const navClose = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpen, navClose, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++){
    elem[i].addEventListener("click", function () {
      navBar.classList.toggle("active");
      overlay.classList.toggle("active");
    })
  }
}


navToggleEvent(navElemArr);
navToggleEvent(navLinks);

const header = document.querySelector("[data-header]");

const goTop = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTop.classList.add("active");
  } else{
    header.classList.remove("active");
    goTop.classList.remove("active");
  }
})