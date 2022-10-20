let cnv = document.getElementById("myCanvas");
ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 600;
let img = document.getElementById("img");
let imgTwo = document.getElementById("imgTwo");
let imgThree = document.getElementById("imgThree");
let score = document.getElementById("score");
let points = 0;
const x = [
  700 + Math.round(Math.random() * 25),
  50,
  0,
  0,
  700,
  700 + Math.round(Math.random() * 50),
  800 + Math.round(Math.random() * 50),
  800 + Math.round(Math.random() * 50),
];
const y = [
  Math.round(Math.random() * 520),
  495,
  0,
  540,
  540,
  Math.round(Math.random() * 520),
  Math.round(Math.random() * 520),
  Math.round(Math.random() * 520),
];
const xSpeed = [0, 2];
const ySpeed = [0];

requestAnimationFrame(animation);
function animation() {
  moveGround();
  requestAnimationFrame(animation);
}

document.addEventListener("keydown", keydownHandler);
function keydownHandler(event) {
  if (event.code == "KeyW") {
    ySpeed[0] = -7;
  } else if (event.code == "KeyA") {
    xSpeed[0] = -5;
  } else if (event.code == "KeyD") {
    xSpeed[0] = 5;
  }
}
document.addEventListener("keyup", keyupHandler);
function keyupHandler(event) {
  if (event.code == "KeyW") {
    y[1] = y[1] + ySpeed[0];
    ySpeed[0] = 3;
  } else if (event.code == "KeyD") {
    xSpeed[0] = 0;
  } else if (event.code == "KeyA") {
    xSpeed[0] = 0;
  }
}
