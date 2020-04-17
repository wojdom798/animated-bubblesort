const root = document.getElementById("app-root");
let mappedPoints = null;

console.log(window.innerWidth);
console.log(window.innerHeight);


function generateRandom(n, r) {
  mappedPoints = new Array(window.innerWidth);
  while (n > 0) {
    let x = randomInt(0, window.innerWidth - r * 2);
    let y = randomInt(0, window.innerHeight - r * 2);
    let dataPoint = document.createElement("div");
    dataPoint.classList.add("data-point");
    dataPoint.style.width = (r * 2) + "px";
    dataPoint.style.height = (r * 2) + "px";
    dataPoint.style.top = y + "px";
    dataPoint.style.left = x + "px";
    root.appendChild(dataPoint);
    mappedPoints[x] = dataPoint;
    n--;
  }
  // console.log(mappedPoints);
  // for (let i = 0; i < mappedPoints.length; i++) {
  //   if (typeof mappedPoints[i] != "undefined")
  //     console.log(mappedPoints[i].offsetLeft);
  // }
};

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
};

// each point: (x, y), where the value 'y' is stored at index 'x'
function swapPoints(a, b) {
  let tmp = a.style.top;
  b.style.top = a.style.top;
  a.style.top = tmp;
}

function bubbleSort() {
  for (let i = 0; i < mappedPoints.length; i++) {
    for (let j = i + 1; j < mappedPoints.length; j++) {
      if ((typeof mappedPoints[i] !== "undefined") && (typeof mappedPoints[j] !== "undefined")) {
        // console.log("both are defined");
        let x1 = mappedPoints[i].offsetLeft;
        let y1 = mappedPoints[i].offsetTop;
        let x2 = mappedPoints[j].offsetLeft;
        let y2 = mappedPoints[j].offsetTop;
        // console.log(`comparing: (${x1}, ${y1}) and (${x1}, ${y1})`);
        if (mappedPoints[i].offsetTop > mappedPoints[j].offsetTop) {
          // console.log(`swapping: ${mappedPoints[i]} and ${mappedPoints[j]}`);
          setTimeout(() => {
            swapPoints(mappedPoints[i], mappedPoints[j]);
          }, 500 + 10 * j);
          let el = mappedPoints[i];
          mappedPoints[i] = mappedPoints[j];
          mappedPoints[j] = el;
        }
      }
    }
  }
}



generateRandom(1000, 4);

setTimeout(() => {
  bubbleSort();
}, 1500);


// debug
// console.log(root.children[5].style.left);
// console.log(root.children[5].offsetLeft);
// root.children[5].style.backgroundColor = "red";
