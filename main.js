let square = document.getElementById("square");

function randomPosition(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log();

setInterval(() => {
  square.style.top = randomPosition(0, 50) + "vw";
  square.style.left = randomPosition(0, 100) + "vw";
  square.style.width = randomPosition(20, 400) + "px";
  square.style.height = randomPosition(20, 400) + "px";
  square.style.backgroundColor = randomColor();
}, 2000);
