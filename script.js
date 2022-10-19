let cnv = document.getElementById("myCanvas");
ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 600;
let img = document.getElementById("img");
let groundX = 0;
let groundY = 540;
let groundTwoX = 700;
let groundTwoY = 540;
let ballX = 50;
let ballY = 522;
let ballMoveY = 0;
let ballMoveX = 0;
let acceleration = 0.1;
let groundBounce = -7;
let gravHeight = -8;

requestAnimationFrame(animation);
function animation() {
  moveGround();
  requestAnimationFrame(animation);
}

document.addEventListener("keydown", keydownHandler);
function keydownHandler(event) {
  if (event.code == "Space") {
    ballMoveY = groundBounce;
    acceleration = 0;

    console.log(ballMoveY, groundBounce);
  } else if (event.code == "KeyA") {
    ballMoveX = -5;
    console.log(ballMoveX);
  } else if (event.code == "KeyD") {
    ballMoveX = 5;
    console.log(ballMoveX);
  }
}
document.addEventListener("keyup", keyupHandler);
function keyupHandler(event) {
  if (event.code == "Space") {
    ballY = ballY + ballMoveY;
    ballMoveY = 3;
  } else if (event.code == "KeyD") {
    ballMoveX = 0;
  } else if (event.code == "KeyA") {
    ballMoveX = 0;
  }
}
