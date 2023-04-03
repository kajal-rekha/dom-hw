const gradientBox = document.getElementById("gradient-box");
const color1 = getRandomColor();
const color2 = getRandomColor();
gradientBox.style.background =
  "Linear-gradient(to bottom,  " + color1 + " , " + color2 + ")";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
