//------------------------------------------------------------------image porte folio

const buttonWorkNext = document.getElementById("work--button--next");
const buttonWorkPrevious = document.getElementById("work--button--previous");
const workDisplay = document.getElementById("work");
let image = [
  "url(./image/site.jpeg)",
  "url(./image/book.jpeg)",
  "url(./image/rock.jpeg)",
  "url(./image/survey.jpeg)",
  "url(./image/card.jpeg)",
  "url(./image/perfume.jpeg)",
  "url(./image/rating.jpeg)",
  "url(./image/pays.jpeg)",
];
let indexImg = 0;

workDisplay.style.backgroundImage = image[indexImg];
buttonWorkNext.addEventListener("click", function () {
  if (indexImg === image.length - 1) {
    indexImg = 0;
    workDisplay.style.backgroundImage = image[indexImg];
  } else {
    indexImg++;
    workDisplay.style.backgroundImage = image[indexImg];
  }
});

buttonWorkPrevious.addEventListener("click", function () {
  if (indexImg === 0) {
    indexImg = image.length - 1;
    workDisplay.style.backgroundImage = image[indexImg];
  } else {
    indexImg--;
    workDisplay.style.backgroundImage = image[indexImg];
  }
});
//------------------------------------------------------------------
