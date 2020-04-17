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
  console.log(mappedPoints.length);

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
        // console.log("both are defined");
        let x1 = mappedPoints[i].offsetLeft;
        let y1 = mappedPoints[i].offsetTop;
        let x2 = mappedPoints[j].offsetLeft;
        let y2 = mappedPoints[j].offsetTop;
        // console.log(`comparing: (${x1}, ${y1}) and (${x2}, ${y2})`);
        setTimeout(() => {
          if (mappedPoints[i].offsetTop < mappedPoints[j].offsetTop) {
            // console.log(`swapping: ${mappedPoints[i]} and ${mappedPoints[j]}`);
            // setTimeout(() => {
              swapPoints(mappedPoints[i], mappedPoints[j]);
            // }, 100 + 10*j);
            
          } else {
            mappedPoints[i].style.backgroundColor = "blue";
          }
        }, 2 + Math.floor(0.05 * i));
        
      }
    }
  }
  console.log("bubble sort done.");
}



generateRandom(400, 3);

setTimeout(() => {
  bubbleSort();
}, 1500);
