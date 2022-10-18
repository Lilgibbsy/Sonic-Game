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
let acceleration = 0.1;
let groundBounce = -7;
let gravHeight = -8;

requestAnimationFrame(animation);
function animation() {
  ctx.beginPath();
  ctx.fillStyle = "aqua";
  ctx.fillRect(0, 0, 700, 600);
  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.arc(ballX, ballY, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
  ballY = ballY + ballMoveY;
  ballMoveY = ballMoveY + acceleration;
  if (ballY > 522) {
    ballMoveY = groundBounce;
    gravHeight++;
  }
  if (ballMoveY == gravHeight) {
    groundBounce++;
  }
  if (gravHeight == 0) {
    groundBounce = 0;
  }
  groundX -= 2;
  groundTwoX -= 2;
  ctx.drawImage(img, groundX, groundY);
  ctx.drawImage(img, groundTwoX, groundTwoY);
  if (groundTwoX == 0) {
    groundX = 700;
  }
  if (groundX == 0) {
    groundTwoX = 700;
  }
  requestAnimationFrame(animation);
}
