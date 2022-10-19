function moveGround() {
  ctx.beginPath();
  ctx.fillStyle = "aqua";
  ctx.fillRect(0, 0, 700, 600);
  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.arc(ballX, ballY, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();
  ballX += ballMoveX;
  ballY = ballY + ballMoveY;
  ballMoveY = ballMoveY + acceleration;
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
  if (ballY >= 522) {
    acceleration = 0;
    ballMoveY = 0;
  }
}
