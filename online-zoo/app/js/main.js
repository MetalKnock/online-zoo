let sliderDotsInput = document.querySelectorAll(".slider-dot__input");
let sliderDotsLabel = document.querySelectorAll(".slider-dot__label");

function hideRollerWhenSliderdotIsScaledDown() {
  window.addEventListener("resize", function () {
    sliderDotsLabel.forEach((val, i) => {
      if (window.getComputedStyle(val).display === "none")
        sliderDotsInput[i].checked = false;
    });
  });
}

hideRollerWhenSliderdotIsScaledDown();
