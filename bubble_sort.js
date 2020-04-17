const root = document.getElementById("app-root");

console.log(window.innerWidth);
console.log(window.innerHeight);

function generateRandom(n, r) {
  while (n > 0) {
    let dataPoint = document.createElement("div");
    dataPoint.classList.add("data-point");
    dataPoint.style.width = (r * 2) + "px";
    dataPoint.style.height = (r * 2) + "px";
    dataPoint.style.top = randomInt(0, window.innerHeight) + "px";
    dataPoint.style.left = randomInt(0, window.innerWidth) + "px";
    root.appendChild(dataPoint);
    n--;
  }
};

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
};

generateRandom(100, 4);