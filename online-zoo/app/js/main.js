let animationEnabledPetsSlider = false;
let animationEnabledTestimonailsSlider = false;
let popupEnabledTestimonails = false;
let numberOfCards = 6;

//burger//

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

//slider pets//

const moveLeft = function () {
  const slider = document.querySelector(".slider__list");
  const btnLeft = document.querySelector(".navigation__arrow--prev");
  const btnRight = document.querySelector(".navigation__arrow--next");

  animationEnabledPetsSlider = true;
  slider.classList.add("transition-left");
  btnLeft.removeEventListener("click", moveLeft);
  btnRight.removeEventListener("click", moveRight);
};

const moveRight = function () {
  const slider = document.querySelector(".slider__list");
  const btnLeft = document.querySelector(".navigation__arrow--prev");
  const btnRight = document.querySelector(".navigation__arrow--next");

  animationEnabledPetsSlider = true;
  slider.classList.add("transition-right");
  btnLeft.removeEventListener("click", moveLeft);
  btnRight.removeEventListener("click", moveRight);
};

const getRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

const getUniqueRandomNumbers = function (amount, max) {
  const arrRandomNumbers = [];
  while (arrRandomNumbers.length < amount) {
    const randomNumber = getRandomNumber(max);
    if (arrRandomNumbers.indexOf(randomNumber) === -1)
      arrRandomNumbers.push(randomNumber);
  }
  return arrRandomNumbers;
};

const getUniqueRandomAnimals = function (amount) {
  const giantPandas = {
    name: "giant pandas",
    native: "Native to Southwest China",
    type: "herbivores",
    img: "./images/pets/giant_Pandas.jpg",
  };
  const eagles = {
    name: "eagles",
    native: "Native to South America",
    type: "carnivores",
    img: "./images/pets/Eagles.jpg",
  };
  const gorillas = {
    name: "Gorillas",
    native: "Native to Congo",
    type: "herbivores",
    img: "./images/pets/Gorillas.jpg",
  };
  const twoToedSloth = {
    name: "Two-toed Sloth",
    native: "Mesoamerica, South America",
    type: "herbivores",
    img: "./images/pets/Two-toed_Sloth.jpg",
  };
  const cheetahs = {
    name: "cheetahs",
    native: "Native to Africa",
    type: "carnivores",
    img: "./images/pets/cheetahs.jpg",
  };
  const penguins = {
    name: "Penguins",
    native: "Native to Antarctica",
    type: "carnivores",
    img: "./images/pets/Penguins.jpg",
  };
  const alligators = {
    name: "Alligators",
    native: "Native to United States",
    type: "carnivores",
    img: "./images/pets/Alligators.jpg",
  };
  const gorillas2 = {
    name: "Gorillas",
    native: "Native to Congo",
    type: "herbivores",
    img: "./images/pets/Gorillas2.jpg",
  };

  const alpaca = {
    name: "Alpaca",
    native: "Native to South America",
    type: "herbivores",
    img: "./images/pets/Alpaca.jpg",
  };
  const bear = {
    name: "Bear",
    native: "North America",
    type: "carnivores",
    img: "./images/pets/Bear.jpg",
  };
  const camelus = {
    name: "Camelus",
    native: "Native to Africa",
    type: "herbivores",
    img: "./images/pets/Camelus.jpg",
  };
  const crocodile = {
    name: "Crocodile",
    native: "Native to Australia",
    type: "carnivores",
    img: "./images/pets/Crocodile.jpg",
  };
  const elephant = {
    name: "Elephant",
    native: "Native to Asia",
    type: "herbivores",
    img: "./images/pets/Elephant.jpg",
  };
  const giraffe = {
    name: "Giraffe",
    native: "Native to Africa",
    type: "herbivores",
    img: "./images/pets/Giraffe.jpg",
  };
  const hippopotamus = {
    name: "Hippopotamus",
    native: "Native to Africa",
    type: "herbivores",
    img: "./images/pets/Hippopotamus.jpg",
  };
  const koala = {
    name: "Koala",
    native: "Native to Australia",
    type: "herbivores",
    img: "./images/pets/Koala.jpg",
  };
  const lion = {
    name: "Lion",
    native: "Native to Africa",
    type: "carnivores",
    img: "./images/pets/Lion.jpg",
  };
  const monkey = {
    name: "Monkey",
    native: "Native to South America",
    type: "herbivores",
    img: "./images/pets/Monkey.jpg",
  };
  const porcupine = {
    name: "Porcupine",
    native: "Native to Canada",
    type: "herbivores",
    img: "./images/pets/Porcupine.jpg",
  };
  const fox = {
    name: "Red fox",
    native: "Native to North America",
    type: "carnivores",
    img: "./images/pets/Red_fox.jpg",
  };
  const struthioCamelus = {
    name: "Struthio Camelus",
    native: "Native to Africa",
    type: "carnivores",
    img: "./images/pets/Struthio_camelus.jpg",
  };
  const zebra = {
    name: "Zebra",
    native: "Native to Africa",
    type: "herbivores",
    img: "./images/pets/Zebra.jpg",
  };
  const animals = [
    giantPandas,
    eagles,
    gorillas,
    twoToedSloth,
    cheetahs,
    penguins,
    alligators,
    gorillas2,
    alpaca,
    bear,
    camelus,
    crocodile,
    elephant,
    giraffe,
    hippopotamus,
    koala,
    lion,
    monkey,
    porcupine,
    fox,
    struthioCamelus,
    zebra,
  ];
  let amountOfCards = 6;
  const uniqueRandomNumbers = getUniqueRandomNumbers(
    amountOfCards,
    animals.length
  );

  const uniqueRandomAnimals = [];

  for (let i = 0; i < uniqueRandomNumbers.length; i++) {
    uniqueRandomAnimals.push(animals[uniqueRandomNumbers[i]]);
  }
  return uniqueRandomAnimals;
};

const createCardForPetsSlider = function (data, i) {
  return (document.innerHTML = `<li class="column__item card">
      <div class="card__wrapper">
        <img class="card__image" src="${data[i].img}" alt="${data[i].name}">
        <div class="card__content">
          <div class="card__inner">
            <h5 class="card__title">${data[i].name}</h5>
            <div class="card__location">${data[i].native}</div>
          </div>
          <img class="card__type card__type--${data[i].type}" src="./images/pets/${data[i].type}.svg" alt="${data[i].type}">
        </div>
      </div>
    </li>`);
};

const createSlideForPetsSlider = function (data, i) {
  if (i === 6) {
    return (document.innerHTML = `<ul class="slider__columns">
    <li class="slider__column column">
      <ul class="column__list">
        ${createCardForPetsSlider(data, 0)}
        ${createCardForPetsSlider(data, 1)}
      </ul>
    </li>
    <li class="slider__column column">
      <ul class="column__list">
        ${createCardForPetsSlider(data, 2)}
        ${createCardForPetsSlider(data, 3)}
      </ul>
    </li>
    <li class="slider__column column">
      <ul class="column__list">
      ${createCardForPetsSlider(data, 4)}
      ${createCardForPetsSlider(data, 5)}
      </ul>
    </li>
  </ul>`);
  } else {
    return (document.innerHTML = `<ul class="slider__columns">
    <li class="slider__column column">
      <ul class="column__list">
        ${createCardForPetsSlider(data, 0)}
        ${createCardForPetsSlider(data, 1)}
      </ul>
    </li>
    <li class="slider__column column">
      <ul class="column__list">
        ${createCardForPetsSlider(data, 2)}
        ${createCardForPetsSlider(data, 3)}
      </ul>
    </li>
  </ul>`);
  }
};

const getUniqueSlide = function (numberOfCards) {
  let newSlide = createSlideForPetsSlider(
    getUniqueRandomAnimals(numberOfCards),
    numberOfCards
  );
  while (
    newSlide === document.querySelector(".slider__item--center").innerHTML
  ) {
    newSlide = createSlideForPetsSlider(
      getUniqueRandomAnimals(numberOfCards),
      numberOfCards
    );
  }
  return newSlide;
};

const createKeyframePetSlider = function () {
  if (document.getElementsByTagName("style").length === 0) {
    const keyFrame = document.createElement("style");
    keyFrame.type = "text/css";
    document.head.appendChild(keyFrame);
    return keyFrame;
  }
  return document.getElementsByTagName("style")[0];
};

const fixStartAnimationPetSlider = function () {
  changeWidthAnimationPetSlider(createKeyframePetSlider());
};

const clickButtonsPetsSlider = function () {
  const btnLeft = document.querySelector(".navigation__arrow--prev");
  const btnRight = document.querySelector(".navigation__arrow--next");
  const slider = document.querySelector(".slider__list");
  const leftSlide = document.querySelector(".slider__item--left");
  const centerSlide = document.querySelector(".slider__item--center");
  const rightSlide = document.querySelector(".slider__item--right");

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);

  if (document.documentElement.clientWidth > 916) {
    numberOfCards = 6;
  } else {
    numberOfCards = 4;
  }

  leftSlide.innerHTML = getUniqueSlide(numberOfCards);
  rightSlide.innerHTML = getUniqueSlide(numberOfCards);

  slider.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
      slider.classList.remove("transition-left");
      const leftItems = leftSlide.innerHTML;

      centerSlide.innerHTML = leftItems;

      leftSlide.innerHTML = getUniqueSlide(numberOfCards);
    } else {
      slider.classList.remove("transition-right");
      const rightItems = rightSlide.innerHTML;

      centerSlide.innerHTML = rightItems;

      rightSlide.innerHTML = getUniqueSlide(numberOfCards);
    }
    animationEnabledPetsSlider = false;
    btnLeft.addEventListener("click", moveLeft);
    btnRight.addEventListener("click", moveRight);
  });
};

const swipePetsSlider = function () {
  let surface = document.querySelector(".slider__list");
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;

  let startTime = 0;
  let elapsedTime = 0;

  let threshold = 150;
  let restraint = 100;
  let allowedTime = 300;
  surface.addEventListener("mousedown", function (e) {
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });
  surface.addEventListener("mouseup", function (e) {
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;

    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if (distX > 0) {
          if (!animationEnabledPetsSlider) {
            moveLeft();
          }
        } else {
          if (!animationEnabledPetsSlider) {
            moveRight();
          }
        }
      }
    }

    e.preventDefault();
  });

  surface.addEventListener("touchstart", function (e) {
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
  });

  surface.addEventListener("touchmove", function (e) {});

  surface.addEventListener("touchend", function (e) {
    let touchObj = e.changedTouches[0];
    distX = touchObj.pageX - startX;
    distY = touchObj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;

    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if (distX > 0) {
          if (!animationEnabledPetsSlider) {
            moveLeft();
          }
        } else {
          if (!animationEnabledPetsSlider) {
            moveRight();
          }
        }
      }
    }
  });
};

const getWidthSlidePetSlider = function () {
  const slide = document.querySelector(".slider__item");
  return Number(slide.offsetWidth);
};

const getGapPetSlider = function () {
  const slider = document.querySelector(".slider__list");
  return Number(window.getComputedStyle(slider).gap.slice(0, -2));
};

const changeWidthAnimationPetSlider = function (keyFrame) {
  keyFrame.innerHTML = `@keyframes move-left {
    from {
      left: ${-(getWidthSlidePetSlider() + getGapPetSlider())}px;
    }
    to {
      left: 0;
    }
  }
  @keyframes move-right {
    from {
      left: ${-(getWidthSlidePetSlider() + getGapPetSlider())}px;
    }
    to {
      left: ${-2 * (getWidthSlidePetSlider() + getGapPetSlider())}px;
    }
  }
  `;
};

const fixStartPositionPetSlider = function () {
  const slider = document.querySelector(".slider__list");

  slider.style.left = `${-(getWidthSlidePetSlider() + getGapPetSlider())}px`;
};

//slider-dot//
const startValueSliderDot = function () {
  const anotherAmountInput = document.querySelector(".another-amount__input");

  document.querySelector("#slider-dot__radio-6").checked = true;
  anotherAmountInput.value = 100;
};

const sliderDot = function () {
  const sliderDot = document.querySelector(".slider-dot");
  const sliderDotsLabels = document.querySelectorAll(".slider-dot__label");
  const sliderDotsInput = document.querySelectorAll(".slider-dot__input");
  const anotherAmountInput = document.querySelector(".another-amount__input");

  startValueSliderDot();

  anotherAmountInput.addEventListener("input", function (e) {
    const currentAnotherAmountInput = e.target.value;

    sliderDotsLabels.forEach((val, i) => {
      if (
        currentAnotherAmountInput ===
        val.attributes.dataprice.nodeValue.slice(1)
      ) {
        sliderDotsInput[i].checked = true;
      } else {
        sliderDotsInput[i].checked = false;
      }
    });
  });
  sliderDot.addEventListener("click", (e) => {
    if (event.target.className === "slider-dot__label") {
      anotherAmountInput.value =
        event.target.attributes.dataPrice.value.slice(1);
    }
  });
};

const hideRollerWhenSliderdotIsScaledDown = function () {
  const sliderDotsInput = document.querySelectorAll(".slider-dot__input");
  const sliderDotsLabel = document.querySelectorAll(".slider-dot__label");
  sliderDotsLabel.forEach((val, i) => {
    if (window.getComputedStyle(val).display === "none")
      sliderDotsInput[i].checked = false;
  });
};

//testimonails slider//

const getWidthReviewTestimonailsSlider = function () {
  const item = document.querySelector(".slider-scroll__item");
  return window.getComputedStyle(item).width.slice(0, -2);
};

const getGapTestimonailsSlider = function () {
  const slider = document.querySelector(".slider-scroll__list");
  return window.getComputedStyle(slider).gap.slice(0, -2);
};

const changeInputTestimonialsSlider = function () {
  const slider = document.querySelector(".slider-scroll__list");
  const navigationScroll = document.querySelector(".slider-scroll__scroll");

  let currentTestimonalsSlide = 0;

  navigationScroll.addEventListener("input", function () {
    currentTestimonalsSlide = navigationScroll.value;
    slider.style.transform = `translateX(${
      (-getWidthReviewTestimonailsSlider() - getGapTestimonailsSlider()) *
      currentTestimonalsSlide
    }px)`;
  });
};

const getTopTestimonailsSlider = function () {
  const surface = document.querySelector(".slider-scroll__list");
  return Number(window.getComputedStyle(surface).top.slice(0, -2));
};

const getNumberAbs = function (value) {
  return Number(Math.abs(value));
};

const swipeTestimonialsSlider = function () {
  const navigationScroll = document.querySelector(".slider-scroll__scroll");
  const card = document.querySelector(".slider-scroll__item");
  let surface = document.querySelector(".slider-scroll__list");
  let surfaceWrapper = document.querySelector(".slider-scroll__wrapper");

  let heightCard = Number(window.getComputedStyle(card).height.slice(0, -2));
  let gapSurface = Number(window.getComputedStyle(surface).gap.slice(0, -2));
  const lengthCards = Number(surface.children.length);
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;

  let startTime = 0;
  let elapsedTime = 0;

  let threshold = 1;
  let restraint = 100;
  let allowedTime = 500;
  surfaceWrapper.addEventListener("mousedown", function (e) {
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  });
  surfaceWrapper.addEventListener("mouseup", function (e) {
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;

    if (elapsedTime <= allowedTime) {
      if (document.documentElement.clientWidth > 880) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          if (distX > 0) {
            navigationScroll.value--;

            surface.style.transform = `translateX(${
              (-getWidthReviewTestimonailsSlider() -
                getGapTestimonailsSlider()) *
              navigationScroll.value
            }px)`;
          } else {
            navigationScroll.value++;

            surface.style.transform = `translateX(${
              (-getWidthReviewTestimonailsSlider() -
                getGapTestimonailsSlider()) *
              navigationScroll.value
            }px)`;
          }
        }
      } else {
        if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
          if (distY > 0) {
            if (getTopTestimonailsSlider() < 0) {
              if (getTopTestimonailsSlider() + 3 * getNumberAbs(distY) < 0) {
                surface.style.top = `${
                  getTopTestimonailsSlider() + 3 * getNumberAbs(distY)
                }px`;
              } else {
                surface.style.top = `0px`;
              }
            }
          } else {
            if (
              getTopTestimonailsSlider() >
              `-${lengthCards * heightCard + gapSurface * (lengthCards - 1)}`
            ) {
              if (
                Math.abs(getTopTestimonailsSlider() - 3 * getNumberAbs(distY)) <
                (lengthCards - 3) * heightCard + gapSurface * (lengthCards - 4)
              ) {
                surface.style.top = `${
                  getTopTestimonailsSlider() - 3 * getNumberAbs(distY)
                }px`;
              } else {
                surface.style.top = `-${
                  (lengthCards - 3) * heightCard +
                  gapSurface * (lengthCards - 4)
                }px`;
              }
            }
          }
        }
      }
    }

    e.preventDefault();
  });

  surfaceWrapper.addEventListener("touchstart", function (e) {
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
  });

  surfaceWrapper.addEventListener("touchmove", function (e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  });

  surfaceWrapper.addEventListener("touchend", function (e) {
    let touchObj = e.changedTouches[0];
    distX = touchObj.pageX - startX;
    distY = touchObj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;

    // if (
    //   (distY < 0 &&
    //     surface.style.top !==
    //       `-${
    //         (lengthCards - 3) * heightCard + gapSurface * (lengthCards - 4)
    //       }px`) ||
    //   (distY > 0 && surface.style.top !== "0px")
    // ) {
    //   stopMovingPage = true;
    // } else {
    //   stopMovingPage = false;
    // }

    if (elapsedTime <= allowedTime) {
      if (document.documentElement.clientWidth > 880) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          if (distX > 0) {
            navigationScroll.value--;

            surface.style.transform = `translateX(${
              (-getWidthReviewTestimonailsSlider() -
                getGapTestimonailsSlider()) *
              navigationScroll.value
            }px)`;
          } else {
            navigationScroll.value++;

            surface.style.transform = `translateX(${
              (-getWidthReviewTestimonailsSlider() -
                getGapTestimonailsSlider()) *
              navigationScroll.value
            }px)`;
          }
        }
      } else {
        if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
          if (distY > 0) {
            if (getTopTestimonailsSlider() + 3 * getNumberAbs(distY) < 0) {
              surface.style.top = `${
                getTopTestimonailsSlider() + 3 * getNumberAbs(distY)
              }px`;
            } else {
              surface.style.top = `0px`;
            }
          } else {
            if (
              getTopTestimonailsSlider() >
              `-${lengthCards * heightCard + gapSurface * (lengthCards - 1)}`
            ) {
              if (
                Math.abs(getTopTestimonailsSlider() - 3 * getNumberAbs(distY)) <
                (lengthCards - 3) * heightCard + gapSurface * (lengthCards - 4)
              ) {
                surface.style.top = `${
                  getTopTestimonailsSlider() - 3 * getNumberAbs(distY)
                }px`;
              } else {
                surface.style.top = `-${
                  (lengthCards - 3) * heightCard +
                  gapSurface * (lengthCards - 4)
                }px`;
              }
            }
          }
        }
      }
    }
  });
};

//testimonails popup//

const toggleClassForPopup = function () {
  const popup = document.querySelector(".popup");
  const popupBackground = document.querySelector(".popup__background");

  popup.classList.toggle("popup--active");
  popupBackground.classList.toggle("popup__background--active");
  document.body.classList.toggle("body--lock");
};

const clickPopupClose = function () {
  const closeButton = document.querySelector(".popup__close");
  const popupWrapper = document.querySelector(".popup__wrapper");
  const popupBackground = document.querySelector(".popup__background");

  popupWrapper.addEventListener("click", (e) => {
    if (
      e.target.className === "popup__wrapper" ||
      e.target.className === "popup__close"
    ) {
      toggleClassForPopup();
    }
  });

  popupBackground.addEventListener("click", () => {
    toggleClassForPopup();
  });
};

const checkWindowWidth880px = function () {
  return document.documentElement.clientWidth <= "880";
};

const clickTestimonailPopup = function () {
  const testimonails = document.querySelector(".slider-scroll__list");
  if (checkWindowWidth880px())
    testimonails.addEventListener("click", openTestimonailPopup);
};

const openTestimonailPopup = function (e) {
  const popup = document.querySelector(".popup__review");
  if (e.target.classList.contains("review")) {
    toggleClassForPopup();
  }
  popup.innerHTML = e.target.innerHTML;
};

//fix pages change client width//

const fixWhenChangingWindowLanding = function () {
  window.addEventListener("resize", function () {
    const navigationScroll = document.querySelector(".slider-scroll__scroll");
    const slider = document.querySelector(".slider-scroll__list");
    const testimonails = document.querySelector(".slider-scroll__list");
    const leftSlide = document.querySelector(".slider__item--left");
    const rightSlide = document.querySelector(".slider__item--right");

    navigationScroll.value = 0;
    slider.style.transform = `translateX(${0}px)`;

    if (document.documentElement.clientWidth > 916) {
      numberOfCards = 6;
    } else {
      numberOfCards = 4;
    }
    leftSlide.innerHTML = getUniqueSlide(numberOfCards);
    rightSlide.innerHTML = getUniqueSlide(numberOfCards);

    if (checkWindowWidth880px()) {
      clickTestimonailPopup();
    } else {
      testimonails.removeEventListener("click", openTestimonailPopup);
      testimonails.style.top = 0;
    }
    fixStartPositionPetSlider();
    changeWidthAnimationPetSlider(createKeyframePetSlider());
  });
};

function fixWhenChangingWindowDonate() {
  window.addEventListener("resize", function () {
    hideRollerWhenSliderdotIsScaledDown();
  });
}

const landingPage = function () {
  if (document.querySelector(".page")) {
    clickBurgerMenu();

    clickButtonsPetsSlider();
    swipePetsSlider();
    fixStartPositionPetSlider();
    fixStartAnimationPetSlider();

    clickTestimonailPopup();
    clickPopupClose();

    changeInputTestimonialsSlider();
    swipeTestimonialsSlider();
    fixWhenChangingWindowLanding();
  }
};

const donatePage = function () {
  if (document.querySelector(".page-donate")) {
    clickBurgerMenu();

    sliderDot();

    fixWhenChangingWindowDonate();
  }
};

landingPage();
donatePage();
