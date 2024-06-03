var css = document.querySelector("h3");
var h1_css = document.getElementById("h1_color");
var h2_css = document.getElementById("h2_color");
var button = document.getElementsByClassName("random")[0];
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    color1.value +
    ", " +
    color2.value +
    " , " +
    color3.value +
    ")";

  css.textContent = body.style.background + ";";
}

function setTextColor() {
  h1_css.style.color = color4.value;
  h2_css.style.color = color4.value;
}

function setDefault() {
  color1.value = "#ff0000";
  color2.value = "#ffff00";
  color3.value = "#0000ff";
  color4.value = "#000000";
  setGradient();
}

function setRandom() {
  color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color3.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  setGradient();
}

color4.addEventListener("input", setTextColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

button.addEventListener("click", setRandom);
