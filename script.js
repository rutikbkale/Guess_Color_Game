var numBoxes = 6;
var arr = [];
var picked;
var boxes = document.getElementsByClassName("box");
var colorCode = document.getElementById("color-code");
var resetButton = document.getElementById("New-color");
var message = document.getElementById("message");
var heading = document.querySelector("h1");

initiate();

function initiate() {
  arr = generateRandomColors(numBoxes);
  picked = pickColor();
  colorCode.textContent = picked;

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = arr[i];

    boxes[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;
      if (rgbToHex(clickedColor) === rgbToHex(picked)) {
        message.textContent = "Correct Guess!";
        message.style.color = "lime";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
      } else {
        this.style.backgroundColor = "rgb(26, 25, 25)";
        message.textContent = "Try Again!";
        message.style.color = "red";
      }
    });
  }
}

function rgbToHex(rgb) {
  var hex = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (hex) {
    return (
      "#" + hex[1].toString(16) + hex[2].toString(16) + hex[3].toString(16)
    );
  }
  return rgb;
}

resetButton.addEventListener("click", resetGame);

function pickColor() {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateRandomColors(limit) {
  var colors = [];
  for (var i = 0; i < limit; i++) {
    colors.push(generateRGB());
  }
  return colors;
}

function generateRGB() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function changeColors(color) {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = color;
  }
  heading.style.backgroundColor = color;
}

function resetGame() {
  arr = generateRandomColors(numBoxes);
  picked = pickColor();
  colorCode.textContent = picked;
  message.textContent = "";
  heading.style.backgroundColor = "rgb(26, 25, 25)";

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = arr[i];
  }
}
