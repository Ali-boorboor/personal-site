const $ = document;
const navMobileMenuIcon = $.querySelector(".nav__mobile-menu-icon");
const menu = $.querySelector(".nav-menu");
const cover = $.querySelector(".cover");
const resumeMenuListItems = $.querySelectorAll(".resume-menu__list-item");
const portfolioMenuListItem = $.querySelectorAll(".portfolio-menu__list-item");

navMobileMenuIcon.addEventListener("click", () => {
  navMobileMenuIcon.classList.toggle("nav__mobile-menu-icon--open");
  menu.classList.toggle("nav-menu--open");
  cover.classList.toggle("cover--show");
});

resumeMenuListItems.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    const resumeMenuListItemActive = $.querySelector(".resume-menu__list-item--active");
    const resumeContent = $.querySelector(`#${listItem.getAttribute("data-list-id")}`);
    const resumeContentVisible = $.querySelector(".resume-content-wrapper--visible");
    resumeMenuListItemActive.classList.remove("resume-menu__list-item--active");
    resumeContentVisible.classList.remove("resume-content-wrapper--visible");
    listItem.classList.add("resume-menu__list-item--active");
    resumeContent.classList.add("resume-content-wrapper--visible");
  });
});

portfolioMenuListItem.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    const portfolioMenuListItemActive = $.querySelector(".portfolio-menu__list-item--active");

    portfolioMenuListItemActive.classList.remove("portfolio-menu__list-item--active");

    listItem.classList.add("portfolio-menu__list-item--active");
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
