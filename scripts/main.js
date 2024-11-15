const $ = document;
const navMobileMenuIcon = $.querySelector(".nav__mobile-menu-icon");
const menu = $.querySelector(".nav-menu");
const cover = $.querySelector(".cover");
const resumeMenuListItems = $.querySelectorAll(".resume-menu__list-item");

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
