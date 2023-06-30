function $(selector) {
  return document.querySelector(selector);
}

const burgerBtn = $(".header__burger");
const windowMenu = $(".window");
const closeBtn = $(".window__close-btn");

burgerBtn.addEventListener("click", () =>
  windowMenu.classList.remove("window--hidden")
);

closeBtn.addEventListener("click", () =>
  windowMenu.classList.add("window--hidden")
);
