var button = document.querySelector(".main-page__button");
var blockOne = document.querySelector(".main-page__text-wrapper--one");
var blockTwo = document.querySelector(".main-page__text-wrapper--two");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  blockOne.style.display = "none";
  button.style.display = "none";
  blockTwo.style.display = "block";
});