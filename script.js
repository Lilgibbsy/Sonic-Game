//Variables
let cnv = document.getElementById("myCanvas");
ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 600;
let levelCounter = 1;
let img = document.getElementById("img");
let imgTwo = document.getElementById("imgTwo");
let imgThree = document.getElementById("imgThree");
let imgFour = document.getElementById("imgFour");
let imgFive = document.getElementById("imgFive");
let score = document.getElementById("score");
let points = 0;
let onAndOff = true;
let levelOneOnAndOff = true;
let levelTwoOnAndOff = true;
let levelThreeOnAndOff = true;
let levelFourOnAndOff = true;
let newLasers = false;
let yMoveDrEggman = false;
//X array
const x = [
  700 + Math.round(Math.random() * 50),
  50,
  0,
  0,
  700,
  700 + Math.round(Math.random() * 50),
  800 + Math.round(Math.random() * 50),
  800 + Math.round(Math.random() * 50),
  600,
  635,
  635,
  635,
  750,
  750,
];
//Y array
const y = [
  Math.round(Math.random() * 520),
  495,
  0,
  540,
  540,
  Math.round(Math.random() * 520),
  Math.round(Math.random() * 520),
  Math.round(Math.random() * 520),
  0,
  85,
  85,
  85,
  599,
  599,
];
//Speed array's
const xSpeed = [0, 2, 1, 2, 2, 1, 2, 2];
const ySpeed = [0, 1, 1, 1, 2, 2, 0.5];
//Animation

setInterval(animation, 5.5);
function animation() {
  movementAndDetection();
}

//Sonic keyboard movement
document.addEventListener("keydown", keydownHandler);
function keydownHandler(event) {
  if (event.code == "KeyW") {
    ySpeed[0] = -4;
  } else if (event.code == "KeyA") {
    xSpeed[0] = -3;
  } else if (event.code == "KeyD") {
    xSpeed[0] = 3;
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
