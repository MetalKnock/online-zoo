const sliderDotsInput = document.querySelectorAll(".slider-dot__input");
const sliderDotsLabel = document.querySelectorAll(".slider-dot__label");
const burgerMenu = document.querySelector(".burger-menu");
const burgerBackground = document.querySelector(".burger-background");

function hideRollerWhenSliderdotIsScaledDown() {
  window.addEventListener("resize", function () {
    sliderDotsLabel.forEach((val, i) => {
      if (window.getComputedStyle(val).display === "none")
        sliderDotsInput[i].checked = false;
    });
  });
}

const clickBurgerMenu = function () {
  if (burgerMenu) {
    const burgerMenuContent = document.querySelector(".burger-menu-content");
    burgerMenu.addEventListener("click", function (e) {
      document.body.classList.toggle("body--lock");
      burgerMenu.classList.toggle("burger-menu--active");
      burgerMenuContent.classList.toggle("burger-menu-content--active");
      burgerBackground.classList.toggle("burger-background--active");
    });
    burgerBackground.addEventListener("click", function (e) {
      document.body.classList.toggle("body--lock");
      burgerMenu.classList.toggle("burger-menu--active");
      burgerMenuContent.classList.toggle("burger-menu-content--active");
      burgerBackground.classList.toggle("burger-background--active");
    });
  }
};

hideRollerWhenSliderdotIsScaledDown();
clickBurgerMenu();
