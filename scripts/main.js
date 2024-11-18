// ! constants
const $ = document;
const navMobileMenuIcon = $.querySelector(".nav__mobile-menu-icon");
const menu = $.querySelector(".nav-menu");
const cover = $.querySelector(".cover");
const resumeMenuListItems = $.querySelectorAll(".resume-menu__list-item");
const portfolioMenuListItem = $.querySelectorAll(".portfolio-menu__list-item");
const menuItems = $.querySelectorAll(".nav-menu__link");
const allSections = $.querySelectorAll("main > section");
const changeThemeBtn = $.querySelector("#theme-changer-btn");
const changeThemeIcon = $.querySelector("#theme-changer-icon");

// ! dark theme / light theme logics
const theme = localStorage.getItem("theme");
if (theme === "dark-mode") {
  document.documentElement.classList.add("dark-mode");
} else {
  document.documentElement.classList.remove("dark-mode");
}
changeThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  if (document.documentElement.classList.contains("dark-mode")) {
    changeThemeIcon.src = "./assets/images/icons/light-mode.svg";
    localStorage.setItem("theme", "dark-mode");
  } else {
    changeThemeIcon.src = "./assets/images/icons/dark-mode.svg";
    localStorage.clear();
  }
});

// ! mobile menu click event handler of header
navMobileMenuIcon.addEventListener("click", () => {
  navMobileMenuIcon.classList.toggle("nav__mobile-menu-icon--open");
  menu.classList.toggle("nav-menu--open");
  cover.classList.toggle("cover--show");
});

// ! on menu give active class based on scroll position
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    const menuItemActive = $.querySelector(".nav-menu__link--active");
    const selectedSection = $.querySelector(`#${menuItem.getAttribute("data-list-id")}`);
    const offsetTopSection = selectedSection.offsetTop - 90;
    e.preventDefault();
    menuItemActive.classList.remove("nav-menu__link--active");
    menuItem.classList.add("nav-menu__link--active");
    window.scrollTo({
      top: offsetTopSection,
    });
  });
});

// ! see where the user is based on scroll and active that item link in header
const observer = new IntersectionObserver(observerHandler, {
  threshold: 0.5,
});

allSections.forEach((section) => observer.observe(section));

function observerHandler(allSections) {
  allSections.map((sections) => {
    if (sections.isIntersecting) {
      let sectionId = sections.target.id;
      const selectedSection = $.querySelector(`.nav-menu__link[data-list-id=${sectionId}]`);
      const activeMenuItem = $.querySelector(".nav-menu__link--active");
      activeMenuItem.classList.remove("nav-menu__link--active");
      selectedSection.classList.add("nav-menu__link--active");
    }
  });
}

// ! remove & add classes for click event handler of resume & portfolio sections
function classListHandler(listItems, activeItemClass, visibleContentClass) {
  listItems.forEach((listItem) => {
    listItem.addEventListener("click", () => {
      const activeItem = $.querySelector(`.${activeItemClass}`);
      const selectedContent = $.querySelector(`#${listItem.getAttribute("data-list-id")}`);
      const visibleContent = $.querySelector(`.${visibleContentClass}`);
      activeItem.classList.remove(activeItemClass);
      visibleContent.classList.remove(visibleContentClass);
      listItem.classList.add(activeItemClass);
      selectedContent.classList.add(visibleContentClass);
    });
  });
}

// ! use the handler for resume section
classListHandler(
  resumeMenuListItems,
  "resume-menu__list-item--active",
  "resume-content-wrapper--visible"
);

// ! use the handler for portfolio section
classListHandler(
  portfolioMenuListItem,
  "portfolio-menu__list-item--active",
  "slider-content--visible"
);

// ! swiper logics & breakpoints
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
