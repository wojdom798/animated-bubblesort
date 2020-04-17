const root = document.getElementById("app-root");
let mappedPoints = null;

// console.log(window.innerWidth);
// console.log(window.innerHeight);

/*
function generateRandom(n, r) {
  mappedPoints = new Array(window.innerWidth);
  let added = 0;
  while ( (n > 0) && (added < mappedPoints.length) ) {
    console.log("added: " + added);
    let x = randomInt(0, window.innerWidth - r * 2);
    if (typeof mappedPoints[x] === "undefined") {
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
      added++;
    }
  }
  // console.log(mappedPoints);
  // for (let i = 0; i < mappedPoints.length; i++) {
  //   if (typeof mappedPoints[i] != "undefined")
  //     console.log(mappedPoints[i].offsetLeft);
  // }
};*/


function generateRandom(n, r) {
  mappedPoints = new Array(window.innerWidth - r*2);
  // console.log(mappedPoints.length);

  if (n > mappedPoints.length) {
    for (let i = 0; i < mappedPoints.length; i++) {
      let y = randomInt(0, window.innerHeight - r * 2);
      let dataPoint = document.createElement("div");
      dataPoint.classList.add("data-point");
      dataPoint.style.width = (r * 2) + "px";
      dataPoint.style.height = (r * 2) + "px";
      dataPoint.style.top = y + "px";
      dataPoint.style.left = i + "px";
      root.appendChild(dataPoint);
      mappedPoints[i] = dataPoint;
    }
  } else {
    while (n > 0) {
      let x = randomInt(0, window.innerWidth - r * 2);
      if (typeof mappedPoints[x] === "undefined") {
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
    }
  }
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
  for (let i = 0; i < mappedPoints.length; i++) {
    for (let j = i + 1; j < mappedPoints.length; j++) {
      if ((typeof mappedPoints[i] !== "undefined") && (typeof mappedPoints[j] !== "undefined")) {
        setTimeout(() => {
          if (mappedPoints[i].offsetTop < mappedPoints[j].offsetTop) {
            // delay(15);
            swapPoints(mappedPoints[i], mappedPoints[j]);
          } else {
            mappedPoints[i].style.backgroundColor = "blue";
          }
        }, 2 + j * 2);
      }
    }
  }
  // console.log("bubble sort done.");
}

function delay(ms) {
  let start = Date.now();
  let difference = 0;
  while (difference < ms) {
    difference = Date.now() - start;
    console.log("difference = " + difference);
  }
};



generateRandom(500, 3);

setTimeout(() => {
  bubbleSort();
}, 1500);