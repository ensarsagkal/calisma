//! 1ST STEP
const body = document.querySelector("body");
const btnClick = document.querySelector(".btn-click");
const btnOver = document.querySelector(".btn-over");
const inputColor = document.getElementById("colorInput");

let letters = "0123456789ABCDEF";

const getRandomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(getRandomColor());

const changeBg = () => {
  document.body.style.backgroundColor = getRandomColor();
};

const changeBgInput = () => {
  let selectedColor = inputColor.value;
  document.body.style.backgroundColor = selectedColor;
};

btnClick.addEventListener("click", changeBg);
btnOver.addEventListener("mouseover", changeBg);
inputColor.addEventListener("change", changeBgInput);
inputColor.addEventListener("input", changeBgInput);