const $ = document;
const navMobileMenuIcon = $.querySelector(".nav__mobile-menu-icon");
const menu = $.querySelector(".nav-menu");
const cover = $.querySelector(".cover");

navMobileMenuIcon.addEventListener("click", () => {
  navMobileMenuIcon.classList.toggle("nav__mobile-menu-icon--open");
  menu.classList.toggle("nav-menu--open");
  cover.classList.toggle("cover--show");
});
