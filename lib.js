function moveGround() {
  ctx.beginPath();
  ctx.fillStyle = "aqua";
  ctx.fillRect(x[2], 0, 700, 600);
  ctx.restore();
  ctx.beginPath();
  ctx.strokeStyle = "yellow";
  ctx.arc(x[0], y[0], 10, 0, 2 * Math.PI);
  ctx.arc(x[0], y[0], 11, 0, 2 * Math.PI);
  ctx.arc(x[0], y[0], 12, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
  ctx.beginPath();
  ctx.strokeStyle = "yellow";
  ctx.arc(x[5], y[5], 10, 0, 2 * Math.PI);
  ctx.arc(x[5], y[5], 11, 0, 2 * Math.PI);
  ctx.arc(x[5], y[5], 12, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
  ctx.beginPath();
  ctx.strokeStyle = "yellow";
  ctx.arc(x[6], y[6], 10, 0, 2 * Math.PI);
  ctx.arc(x[6], y[6], 11, 0, 2 * Math.PI);
  ctx.arc(x[6], y[6], 12, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
  ctx.beginPath();
  ctx.strokeStyle = "yellow";
  ctx.arc(x[7], y[7], 10, 0, 2 * Math.PI);
  ctx.arc(x[7], y[7], 11, 0, 2 * Math.PI);
  ctx.arc(x[7], y[7], 12, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
  ctx.drawImage(imgThree, x[1], y[1]);

  x[0] -= xSpeed[1];
  if (x[0] < 0) {
    x[0] = 700 + Math.round(Math.random() * 50);
    y[0] = Math.round(Math.random() * 520);
  }
  x[5] -= xSpeed[1];
  if (x[5] < 0) {
    x[5] = 700 + Math.round(Math.random() * 50);
    y[5] = Math.round(Math.random() * 520);
  }
  x[6] -= xSpeed[1];
  if (x[6] < 0) {
    x[6] = 800 + Math.round(Math.random() * 50);
    y[6] = Math.round(Math.random() * 520);
  }
  x[7] -= xSpeed[1];
  if (x[7] < 0) {
    x[7] = 800 + Math.round(Math.random() * 50);
    y[7] = Math.round(Math.random() * 520);
  }

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
  x[1] += xSpeed[0];
  y[1] = y[1] + ySpeed[0];
  x[3] -= 2;
  x[4] -= 2;

  x[8] -= xSpeed[2];

  if (x[8] < 0) {
    xSpeed[2] = -1;
  } else if (x[8] > 600) {
    xSpeed[2] = 1;
  }
  ctx.drawImage(img, x[3], y[3]);
  ctx.drawImage(img, x[4], y[4]);
  ctx.drawImage(imgTwo, x[8], y[8]);
  if (x[4] == 0) {
    x[3] = 700;
  }
  if (x[3] == 0) {
    x[4] = 700;
  }
  if (y[1] >= 495) {
    ySpeed[0] = 0;
  }
}
