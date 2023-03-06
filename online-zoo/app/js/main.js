let animationEnabledPetsSlider = false;
let animationEnabledTestimonialsSlider = false;
let popupEnabledTestimonials = false;
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

const getDataAnimals = function () {
  return [
    {
      name: "giant pandas",
      native: "Native to Southwest China",
      type: "herbivores",
      img: "./images/pets/giant_Pandas.jpg",
      icon: "./images/pets/icons/panda.png",
    },
    {
      name: "eagles",
      native: "Native to Los Angeles",
      type: "carnivores",
      img: "./images/pets/Eagles.jpg",
      icon: "./images/pets/icons/eagle.png",
    },
    {
      name: "Gorillas",
      native: "Native to Congo",
      type: "herbivores",
      img: "./images/pets/Gorillas.jpg",
      icon: "./images/pets/icons/gorilla.png",
    },
    {
      name: "Two-toed Sloth",
      native: "Native to Venezuela",
      type: "herbivores",
      img: "./images/pets/Two-toed_Sloth.jpg",
      icon: "./images/pets/icons/sloth.png",
    },
    {
      name: "cheetahs",
      native: "Native to Africa",
      type: "carnivores",
      img: "./images/pets/cheetahs.jpg",
      icon: "./images/pets/icons/cheetah.png",
    },
    {
      name: "Penguins",
      native: "Native to Antarctica",
      type: "carnivores",
      img: "./images/pets/Penguins.jpg",
      icon: "./images/pets/icons/penguin.png",
    },
    {
      name: "Alligators",
      native: "Native to Mexico",
      type: "carnivores",
      img: "./images/pets/Alligators.jpg",
      icon: "./images/pets/icons/alligator.png",
    },
    {
      name: "Alpaca",
      native: "Native to Southern Peru",
      type: "herbivores",
      img: "./images/pets/Alpaca.jpg",
      icon: "./images/pets/icons/alpaca.png",
    },
    {
      name: "Bear",
      native: "Native to Alaska",
      type: "carnivores",
      img: "./images/pets/Bear.jpg",
      icon: "./images/pets/icons/bear.png",
    },
    {
      name: "Camel",
      native: "Native to Somalia",
      type: "herbivores",
      img: "./images/pets/Camelus.jpg",
      icon: "./images/pets/icons/camel.png",
    },
    {
      name: "Crocodile",
      native: "Native to Australia",
      type: "carnivores",
      img: "./images/pets/Crocodile.jpg",
      icon: "./images/pets/icons/crocodile.png",
    },
    {
      name: "Elephant",
      native: "Native to India",
      type: "herbivores",
      img: "./images/pets/Elephant.jpg",
      icon: "./images/pets/icons/elephant.png",
    },
    {
      name: "Giraffe",
      native: "Native to Namibia",
      type: "herbivores",
      img: "./images/pets/Giraffe.jpg",
      icon: "./images/pets/icons/giraffe.png",
    },
    {
      name: "Hippopotamus",
      native: "Native to Ethiopia",
      type: "herbivores",
      img: "./images/pets/Hippopotamus.jpg",
      icon: "./images/pets/icons/hippo.png",
    },
    {
      name: "Koala",
      native: "Native to Queensland",
      type: "herbivores",
      img: "./images/pets/Koala.jpg",
      icon: "./images/pets/icons/koala.png",
    },
    {
      name: "Lion",
      native: "Native to Asia",
      type: "carnivores",
      img: "./images/pets/Lion.jpg",
      icon: "./images/pets/icons/lion.png",
    },
    {
      name: "Monkey",
      native: "Native to Brazil",
      type: "herbivores",
      img: "./images/pets/Monkey.jpg",
      icon: "./images/pets/icons/monkey.png",
    },
    {
      name: "Porcupine",
      native: "Native to Canada",
      type: "herbivores",
      img: "./images/pets/Porcupine.jpg",
      icon: "./images/pets/icons/porcupine.png",
    },
    {
      name: "Red fox",
      native: "Native to North America",
      type: "carnivores",
      img: "./images/pets/Red_fox.jpg",
      icon: "./images/pets/icons/fox.png",
    },
    {
      name: "Struthio Camelus",
      native: "Native to Angola",
      type: "carnivores",
      img: "./images/pets/Struthio_camelus.jpg",
      icon: "./images/pets/icons/ostrich.png",
    },
    {
      name: "Zebra",
      native: "Native to Northern Kenya",
      type: "herbivores",
      img: "./images/pets/Zebra.jpg",
      icon: "./images/pets/icons/zebra.png",
    },
  ];
};

const getUniqueRandomAnimals = function (amount) {
  const animals = getDataAnimals();
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
        val.attributes.dataPrice.nodeValue.slice(1)
      ) {
        sliderDotsInput[i].checked = true;
      } else {
        sliderDotsInput[i].checked = false;
      }
    });
    hideRollerWhenSliderDotIsScaledDown();
  });
  sliderDot.addEventListener("click", (e) => {
    if (event.target.className === "slider-dot__label") {
      anotherAmountInput.value =
        event.target.attributes.dataPrice.value.slice(1);
    }
  });
};

const hideRollerWhenSliderDotIsScaledDown = function () {
  const sliderDotsInput = document.querySelectorAll(".slider-dot__input");
  const sliderDotsLabel = document.querySelectorAll(".slider-dot__label");
  sliderDotsLabel.forEach((val, i) => {
    if (window.getComputedStyle(val).display === "none")
      sliderDotsInput[i].checked = false;
  });
};

//testimonials slider//

const getWidthReviewTestimonialsSlider = function () {
  const item = document.querySelector(".slider-scroll__item");
  return window.getComputedStyle(item).width.slice(0, -2);
};

const getGapTestimonialsSlider = function () {
  const slider = document.querySelector(".slider-scroll__list");
  return window.getComputedStyle(slider).gap.slice(0, -2);
};

const changeInputTestimonialsSlider = function () {
  const slider = document.querySelector(".slider-scroll__list");
  const navigationScroll = document.querySelector(".slider-scroll__scroll");

  let currentTestimonialsSlide = 0;

  navigationScroll.addEventListener("input", function () {
    currentTestimonialsSlide = navigationScroll.value;
    slider.style.transform = `translateX(${
      (-getWidthReviewTestimonialsSlider() - getGapTestimonialsSlider()) *
      currentTestimonialsSlide
    }px)`;
  });
};

const getTopTestimonialsSlider = function () {
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
              (-getWidthReviewTestimonialsSlider() -
                getGapTestimonialsSlider()) *
              navigationScroll.value
            }px)`;
          } else {
            navigationScroll.value++;

            surface.style.transform = `translateX(${
              (-getWidthReviewTestimonialsSlider() -
                getGapTestimonialsSlider()) *
              navigationScroll.value
            }px)`;
          }
        }
      } else {
        if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
          if (distY > 0) {
            if (getTopTestimonialsSlider() < 0) {
              if (getTopTestimonialsSlider() + 3 * getNumberAbs(distY) < 0) {
                surface.style.top = `${
                  getTopTestimonialsSlider() + 3 * getNumberAbs(distY)
                }px`;
              } else {
                surface.style.top = `0px`;
              }
            }
          } else {
            if (
              getTopTestimonialsSlider() >
              `-${lengthCards * heightCard + gapSurface * (lengthCards - 1)}`
            ) {
              if (
                Math.abs(getTopTestimonialsSlider() - 3 * getNumberAbs(distY)) <
                (lengthCards - 3) * heightCard + gapSurface * (lengthCards - 4)
              ) {
                surface.style.top = `${
                  getTopTestimonialsSlider() - 3 * getNumberAbs(distY)
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

    if (elapsedTime <= allowedTime) {
      if (document.documentElement.clientWidth > 880) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          if (distX > 0) {
            navigationScroll.value--;

            surface.style.transform = `translateX(${
              (-getWidthReviewTestimonialsSlider() -
                getGapTestimonialsSlider()) *
              navigationScroll.value
            }px)`;
          } else {
            navigationScroll.value++;

            surface.style.transform = `translateX(${
              (-getWidthReviewTestimonialsSlider() -
                getGapTestimonialsSlider()) *
              navigationScroll.value
            }px)`;
          }
        }
      } else {
        if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
          if (distY > 0) {
            if (getTopTestimonialsSlider() + 3 * getNumberAbs(distY) < 0) {
              surface.style.top = `${
                getTopTestimonialsSlider() + 3 * getNumberAbs(distY)
              }px`;
            } else {
              surface.style.top = `0px`;
            }
          } else {
            if (
              getTopTestimonialsSlider() >
              `-${lengthCards * heightCard + gapSurface * (lengthCards - 1)}`
            ) {
              if (
                Math.abs(getTopTestimonialsSlider() - 3 * getNumberAbs(distY)) <
                (lengthCards - 3) * heightCard + gapSurface * (lengthCards - 4)
              ) {
                surface.style.top = `${
                  getTopTestimonialsSlider() - 3 * getNumberAbs(distY)
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

//testimonials popup//

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

const clickTestimonialPopup = function () {
  const testimonials = document.querySelector(".slider-scroll__list");
  if (checkWindowWidth880px())
    testimonials.addEventListener("click", openTestimonialPopup);
};

const openTestimonialPopup = function (e) {
  const popup = document.querySelector(".popup__review");
  if (e.target.classList.contains("review")) {
    toggleClassForPopup();
  }
  popup.innerHTML = e.target.innerHTML;
};

//preloader//
window.addEventListener("load", function () {
  document.querySelector(".preloader").style.display = "none";
});

//fix pages change client width//

const fixWhenChangingWindowLanding = function () {
  window.addEventListener("resize", function () {
    const navigationScroll = document.querySelector(".slider-scroll__scroll");
    const slider = document.querySelector(".slider-scroll__list");
    const testimonials = document.querySelector(".slider-scroll__list");
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
      clickTestimonialPopup();
    } else {
      testimonials.removeEventListener("click", openTestimonialPopup);
      testimonials.style.top = 0;
    }
    fixStartPositionPetSlider();
    changeWidthAnimationPetSlider(createKeyframePetSlider());
  });
};

const map = function () {
  const map = L.map("map", {
    zoomControl: false,
  }).setView([50, 0], 2);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 8,
    minZoom: 2,
  }).addTo(map);

  L.control
    .zoom({
      position: "bottomright",
    })
    .addTo(map);

  const southWest = L.latLng(-89, -179),
    northEast = L.latLng(89, 179);
  const bounds = L.latLngBounds(southWest, northEast);

  map.setMaxBounds(bounds);
  map.on("drag", function () {
    map.panInsideBounds(bounds, { animate: false });
  });

  const dataAnimals = getDataAnimals();
  dataAnimals.map((val, i) => {
    getLatitudeLongitude(val.native.slice(10)).then(
      (latitudeLongitude) => {
        const latitude = latitudeLongitude[0];
        const longitude = latitudeLongitude[1];

        const myIcon = L.icon({
          iconUrl: `${val.icon}`,
          iconSize: [40, 40],
          iconAnchor: [40, 40],
          popupAnchor: [-20, -40],
        });
        const marker = L.marker([latitude, longitude], {
          icon: myIcon,
        }).addTo(map);
        marker.bindPopup(`
          <div class="map__popup">
            <div class='map__popup-text'>
              <div class='map__popup-name'>
                ${val.name.toUpperCase()}
              </div>
              <div class='map__popup-location'>
                ${val.native.slice(10)}
              </div>
            </div>
            <a class='map__popup-link' href="#">
              <button class="map__popup-button btn">
                Watch online
              </button>
            </a>
          </div>
          `);
      },
      (error) => error
    );
  });
};

async function getLatitudeLongitude(country) {
  const url = `http://api.positionstack.com/v1/forward?access_key=a68c59aab80f3a5bf3366583b6eeaf44&query=${country}`;
  const location = await fetch(url);
  const locationText = await location.json();
  const latitudeLongitude = [];
  latitudeLongitude.push(locationText.data[0].latitude);
  latitudeLongitude.push(locationText.data[0].longitude);

  return latitudeLongitude;
}

function fixWhenChangingWindowDonate() {
  window.addEventListener("resize", function () {
    hideRollerWhenSliderDotIsScaledDown();
    startValueSliderDot();
  });
}

const landingPage = function () {
  if (document.querySelector(".page")) {
    clickBurgerMenu();

    clickButtonsPetsSlider();
    swipePetsSlider();
    fixStartPositionPetSlider();
    fixStartAnimationPetSlider();

    clickTestimonialPopup();
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

const mapPage = function () {
  if (document.querySelector(".page-map")) {
    clickBurgerMenu();
    map();
  }
};

landingPage();
donatePage();
mapPage();
