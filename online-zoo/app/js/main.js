function hideRollerWhenSliderdotIsScaledDown() {
  const sliderDotsInput = document.querySelectorAll(".slider-dot__input");
  const sliderDotsLabel = document.querySelectorAll(".slider-dot__label");
  if (sliderDotsLabel && sliderDotsInput) {
    window.addEventListener("resize", function () {
      sliderDotsLabel.forEach((val, i) => {
        if (window.getComputedStyle(val).display === "none")
          sliderDotsInput[i].checked = false;
      });
    });
  }
}

const clickBurgerMenu = function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerBackground = document.querySelector(".burger-background");
  const burgerMenuContent = document.querySelector(".burger-menu-content");
  if (burgerMenu && burgerBackground && burgerMenuContent) {
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

const clickPetsSlider = function () {
  const buttonPrev = document.querySelector(".navigation__arrow--prev");
  const buttonNext = document.querySelector(".navigation__arrow--next");
  let curSlide = 0;

  if (buttonPrev && buttonNext) {
    buttonPrev.addEventListener("click", function (e) {
      console.log("1");
    });
    buttonNext.addEventListener("click", function (e) {
      console.log("2");
    });
  }
};

const swipeTestimonialsSlider = function () {
  const slider = document.querySelector(".slider-scroll__list");
  const navigationScroll = document.querySelector(".slider-scroll__scroll");
  const item = document.querySelector(".slider-scroll__item");
  let currentTestimonalsSlide = 0;

  navigationScroll.addEventListener("input", function () {
    const widthReview = window.getComputedStyle(item).width.slice(0, -2);
    const gap = window.getComputedStyle(slider).gap.slice(0, -2);
    currentTestimonalsSlide = navigationScroll.value;
    slider.style.transform = `translateX(${
      (-widthReview - gap) * currentTestimonalsSlide
    }px)`;
  });
};

const zeroingWhenChangingWindow = function () {
  window.addEventListener("resize", function () {
    const navigationScroll = document.querySelector(".slider-scroll__scroll");
    const slider = document.querySelector(".slider-scroll__list");
    navigationScroll.value = 0;
    swipeTestimonialsSlider();
    slider.style.transform = `translateX(${0}px)`;
  });
};

hideRollerWhenSliderdotIsScaledDown();
clickBurgerMenu();
clickPetsSlider();
swipeTestimonialsSlider();
zeroingWhenChangingWindow();
