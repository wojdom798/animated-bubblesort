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
  a.style.top = b.style.top;
  b.style.top = tmp;
}

function bubbleSort() {
  console.log(mappedPoints);
  for (let i = 0; i < mappedPoints.length; i++) {
    for (let j = i + 1; j < mappedPoints.length; j++) {
      if ((typeof mappedPoints[i] !== "undefined") && (typeof mappedPoints[j] !== "undefined")) {
        // console.log("both are defined");
        let x1 = mappedPoints[i].offsetLeft;
        let y1 = mappedPoints[i].offsetTop;
        let x2 = mappedPoints[j].offsetLeft;
        let y2 = mappedPoints[j].offsetTop;
        // console.log(`comparing: (${x1}, ${y1}) and (${x2}, ${y2})`);
        if (mappedPoints[i].offsetTop < mappedPoints[j].offsetTop) {
          // console.log(`swapping: ${mappedPoints[i]} and ${mappedPoints[j]}`);
          mappedPoints[i].style.backgroundColor = "red";
          mappedPoints[j].style.backgroundColor = "orange";
          // setTimeout(() => {
            swapPoints(mappedPoints[i], mappedPoints[j]);
            mappedPoints[j].style.backgroundColor = "green";
          // }, 500 + 10 * j);
          
        } else {
          mappedPoints[i].style.backgroundColor = "blue";
        }
      }
    }
  }
  console.log("bubble sort done.");
}



generateRandom(500, 4);

setTimeout(() => {
  bubbleSort();
}, 1500);


// debug
// console.log(root.children[5].style.left);
// console.log(root.children[5].offsetLeft);
// root.children[5].style.backgroundColor = "red";
