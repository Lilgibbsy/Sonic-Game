function movementAndDetection() {
  //Backgorund
  ctx.beginPath();
  ctx.fillStyle = "aqua";
  ctx.fillRect(x[2], 0, 700, 600);
  ctx.restore();
  //Coin one
  ctx.beginPath();
  ctx.strokeStyle = "yellow";
  ctx.arc(x[0], y[0], 10, 0, 2 * Math.PI);
  ctx.arc(x[0], y[0], 11, 0, 2 * Math.PI);
  ctx.arc(x[0], y[0], 12, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
  //Coin two
  ctx.beginPath();
  ctx.strokeStyle = "yellow";
  ctx.arc(x[5], y[5], 10, 0, 2 * Math.PI);
  ctx.arc(x[5], y[5], 11, 0, 2 * Math.PI);
  ctx.arc(x[5], y[5], 12, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
  //Coin three
  ctx.beginPath();
  ctx.strokeStyle = "yellow";
  ctx.arc(x[6], y[6], 10, 0, 2 * Math.PI);
  ctx.arc(x[6], y[6], 11, 0, 2 * Math.PI);
  ctx.arc(x[6], y[6], 12, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
  //Coin four
  ctx.beginPath();
  ctx.strokeStyle = "yellow";
  ctx.arc(x[7], y[7], 10, 0, 2 * Math.PI);
  ctx.arc(x[7], y[7], 11, 0, 2 * Math.PI);
  ctx.arc(x[7], y[7], 12, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
  //Laser beam diagonal left
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(x[9], y[9]);
  ctx.lineTo(x[9] - 50, y[9] + 50);
  ctx.stroke();
  ctx.restore();
  //Laser beam diagonal right
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(x[10], y[10]);
  ctx.lineTo(x[10] + 50, y[10] + 50);
  ctx.stroke();
  ctx.restore();
  //Laser beam down
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(x[11], y[11]);
  ctx.lineTo(x[11], y[11] + 50);
  ctx.stroke();
  ctx.restore();
  //Sonice img
  ctx.drawImage(imgThree, x[1], y[1]);
  //Ground img's
  ctx.drawImage(img, x[3], y[3]);
  ctx.drawImage(img, x[4], y[4]);
  //Dr.Eggman img
  ctx.drawImage(imgTwo, x[8], y[8]);
  //Coin one movement and collision
  x[0] -= xSpeed[1];
  if (x[0] < 0) {
    x[0] = 700 + Math.round(Math.random() * 50);
    y[0] = Math.round(Math.random() * 520);
  }
  //Coin two movement and collision
  x[5] -= xSpeed[1];
  if (x[5] < 0) {
    x[5] = 700 + Math.round(Math.random() * 50);
    y[5] = Math.round(Math.random() * 520);
  }
  //Coin three movement and collision
  x[6] -= xSpeed[1];
  if (x[6] < 0) {
    x[6] = 800 + Math.round(Math.random() * 50);
    y[6] = Math.round(Math.random() * 520);
  }
  //Coin four movement and collision
  x[7] -= xSpeed[1];
  if (x[7] < 0) {
    x[7] = 800 + Math.round(Math.random() * 50);
    y[7] = Math.round(Math.random() * 520);
  }
  //collecting coins
  if (
    x[1] - x[0] < 20 &&
    y[1] - y[0] < 20 &&
    x[1] - x[0] > -20 &&
    y[1] - y[0] > -20
  ) {
    x[0] = 700 + Math.round(Math.random() * 50);
    y[0] = Math.round(Math.random() * 520);
    points += 1;
  }
  if (
    x[1] - x[5] < 20 &&
    y[1] - y[5] < 20 &&
    x[1] - x[5] > -20 &&
    y[1] - y[5] > -20
  ) {
    x[5] = 700 + Math.round(Math.random() * 50);
    y[5] = Math.round(Math.random() * 520);
    points += 1;
  }
  if (
    x[1] - x[6] < 20 &&
    y[1] - y[6] < 20 &&
    x[1] - x[6] > -20 &&
    y[1] - y[6] > -20
  ) {
    x[6] = 800 + Math.round(Math.random() * 50);
    y[6] = Math.round(Math.random() * 520);
    points += 1;
  }
  if (
    x[1] - x[7] < 20 &&
    y[1] - y[7] < 20 &&
    x[1] - x[7] > -20 &&
    y[1] - y[7] > -20
  ) {
    x[7] = 800 + Math.round(Math.random() * 50);
    y[7] = Math.round(Math.random() * 520);
    points += 1;
  }
  score.innerHTML = "Score: " + points;
  //Sonic movement
  x[1] += xSpeed[0];
  y[1] = y[1] + ySpeed[0];
  //Ground movement
  x[3] -= 2;
  x[4] -= 2;
  //Dr.Eggman movement
  x[8] -= xSpeed[2];
  //Laser movement
  x[9] -= xSpeed[3];
  x[10] += xSpeed[4];
  x[11] -= xSpeed[5];
  y[9] += ySpeed[1];
  y[10] += ySpeed[2];
  y[11] += ySpeed[3];

  if (x[9] < 0 || y[9] > 600) {
    x[9] = x[8] + 25;
    y[9] = y[8] + 85;
  }
  if (x[10] > 700 || y[10] > 600) {
    x[10] = x[8] + 25;
    y[10] = y[8] + 85;
  }
  if (x[11] > 700 || y[11] > 600 || x[11] < 0) {
    x[11] = x[8] + 25;
    y[11] = y[8] + 85;
  }
  //Laser play collision detection
  if (
    x[1] - x[9] < 50 &&
    y[1] - y[9] < 50 &&
    x[1] - x[9] > -50 &&
    y[1] - y[9] > -50
  ) {
    console.log(onAndOff);
    onAndOff = false;
  }
  if (
    x[1] - x[10] < 50 &&
    y[1] - y[10] < 50 &&
    x[1] - x[10] > -50 &&
    y[1] - y[10] > -50
  ) {
    console.log(onAndOff);
    onAndOff = false;
  }
  if (
    x[1] - x[11] < 50 &&
    y[1] - y[11] < 50 &&
    x[1] - x[11] > -50 &&
    y[1] - y[11] > -50
  ) {
    console.log(onAndOff);
    onAndOff = false;
  }
  //Dr.Eggman and laser wall collision
  if (x[8] < 0) {
    xSpeed[2] = -1;
  } else if (x[8] > 600) {
    xSpeed[2] = 1;
  }
  //Ground loop
  if (x[4] == 0) {
    x[3] = 700;
  }
  if (x[3] == 0) {
    x[4] = 700;
  }
  //Sonic ground collision
  if (y[1] >= 495) {
    ySpeed[0] = 0;
  }
}
