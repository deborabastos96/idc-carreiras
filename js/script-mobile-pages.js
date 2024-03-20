"use strict";

////////////////////////////////////////////////////////////////////////////////
// Ano alterar ano atual
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////////////////////////////////////////
// Carrossel
$(document).ready(function () {
  $(".carrossels").owlCarousel({
    pagination: false,
    autoplay: true,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});

/////////////////////////////////////////////
// Submenu mobile

let acc = document.getElementsByClassName("header__item-menu");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Toggle between adding and removing the "active" class, to highlight the button that controls the panel
    this.classList.toggle("header__submenu-mobile");
  });
}

const spanCursosTec = document.querySelector(".header__span");

spanCursosTec.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  document.body.classList.toggle("overlay");
});

$(function () {
  $(".header__item-icon").click(function (e) {
    e.preventDefault();
  });
});

/////////////////////////////////////////////
// Menu mobile

const btnNavEl = document.querySelector(".nav__mobile-btn");
const headerEl = document.querySelector(".header");
const cursosTecMenu = document.querySelector(".header__item-cursos-tecnicos");
const cursosLivresMenu = document.querySelector(
  ".header__item-idc-corporativo"
);
const cursosAdmMenu = document.querySelector(".header__item-adm");
const cursosMktMenu = document.querySelector(".header__item-mkt");
const cursosRhMenu = document.querySelector(".header__item-rh");
const cursosImobMenu = document.querySelector(".header__item-imob");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  document.body.classList.toggle("overlay");
  cursosTecMenu.classList.remove("header__item-cursos-tecnicos_hover");
  cursosLivresMenu.classList.remove("header__item-idc-corporativo_hover");
  cursosAdmMenu.classList.remove("header__item-adm_hover");
  cursosMktMenu.classList.remove("header__item-mkt_hover");
  cursosRhMenu.classList.remove("header__item-rh_hover");
  cursosImobMenu.classList.remove("header__item-imob_hover");
});

//////////////////////////////////////////////
// Sticky navigation

const contentJs = document.querySelector(".content-js");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) contentJs.classList.add("u-margin-top-big");
    if (!ent.isIntersecting) document.body.classList.add("sticky-shadow");
    if (ent.isIntersecting) document.body.classList.remove("sticky-shadow");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(contentJs);

////////////////////////////////////////////////////////////
// Button back to top
let mybutton = document.getElementsByClassName("btn--top")[0];

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Cookies

const cookieBox = document.querySelector(".wrapper"),
  acceptBtn = cookieBox.querySelector("button");
acceptBtn.onclick = () => {
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  } else {
    //if cookie not set then alert an error
    alert(
      "Os cookies não funcionam! Por favor desbloqueie esse site das suas configurações de cookies do navegador."
    );
  }
};
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1
  ? cookieBox.classList.add("hide")
  : cookieBox.classList.remove("hide");
