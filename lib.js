function movementAndDetection() {
  if (onAndOff) {
    //Level Counter
    document.getElementById("level").innerHTML = "Level " + levelCounter + "/4";
    //Backgorund
    ctx.beginPath();
    ctx.fillStyle = "aqua";
    ctx.fillRect(x[2], 0, 700, 600);
    ctx.restore();
    //Ring one
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(x[0], y[0], 10, 0, 2 * Math.PI);
    ctx.arc(x[0], y[0], 11, 0, 2 * Math.PI);
    ctx.arc(x[0], y[0], 12, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
    //Ring two
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(x[5], y[5], 10, 0, 2 * Math.PI);
    ctx.arc(x[5], y[5], 11, 0, 2 * Math.PI);
    ctx.arc(x[5], y[5], 12, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
    //Ring three
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(x[6], y[6], 10, 0, 2 * Math.PI);
    ctx.arc(x[6], y[6], 11, 0, 2 * Math.PI);
    ctx.arc(x[6], y[6], 12, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
    //Ring four
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
    //Score Counter in Canvas
    ctx.beginPath();
    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Score: " + points, cnv.width / 2, cnv.height / 2);
    ctx.restore();
    ctx.beginPath();
    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(
      "Level " + levelCounter + "/4",
      cnv.width / 2,
      cnv.height / 2 - 20
    );
    ctx.restore();
    //Ring one movement and collision
    x[0] -= xSpeed[1];
    if (x[0] < 0) {
      x[0] = 700 + Math.round(Math.random() * 50);
      y[0] = Math.round(Math.random() * 520);
    }
    //Ring two movement and collision
    x[5] -= xSpeed[1];
    if (x[5] < 0) {
      x[5] = 700 + Math.round(Math.random() * 50);
      y[5] = Math.round(Math.random() * 520);
    }
    //Ring three movement and collision
    x[6] -= xSpeed[1];
    if (x[6] < 0) {
      x[6] = 800 + Math.round(Math.random() * 50);
      y[6] = Math.round(Math.random() * 520);
    }
    //Ring four movement and collision
    x[7] -= xSpeed[1];
    if (x[7] < 0) {
      x[7] = 800 + Math.round(Math.random() * 50);
      y[7] = Math.round(Math.random() * 520);
    }
    //Collecting rings
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
    //Dr.Eggman wall collision
    if (x[8] < 0) {
      xSpeed[2] = -1;
    } else if (x[8] > 600) {
      xSpeed[2] = 1;
    } else if (y[8] > 450) {
      ySpeed[6] = -0.5;
    } else if (y[8] < 0) {
      ySpeed[6] = 0.5;
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
    //Finish level 1 at 25 points
    if (levelOneOnAndOff) {
      if (points == 1) {
        xSpeed[3] += 1;
        xSpeed[4] += 1;
        xSpeed[5] += 1;
        ySpeed[1] += 1;
        ySpeed[2] += 1;
        ySpeed[3] += 1;
        levelCounter += 1;
        levelOneOnAndOff = false;
      }
    }
    //Finish level 2 at 50 points
    if (levelTwoOnAndOff) {
      if (points == 2) {
        levelCounter += 1;
        newLasers = true;
        levelTwoOnAndOff = false;
      }
    }
    if (newLasers) {
      //Laser beam diagonal right two

      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.moveTo(x[12], y[12]);
      ctx.lineTo(x[12] + 25, y[12] + 50);
      ctx.stroke();
      ctx.restore();

      //Laser beam diagonal left two

      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.moveTo(x[13], y[13]);
      ctx.lineTo(x[13] - 25, y[13] + 50);
      ctx.stroke();
      ctx.restore();

      //New lasers movement
      x[12] += xSpeed[6];
      y[12] += ySpeed[4];
      x[13] -= xSpeed[7];
      y[13] += ySpeed[5];
      if (x[12] > 700 || y[12] > 600) {
        x[12] = x[8] + 25;
        y[12] = y[8] + 85;
      }
      if (x[13] < 0 || y[13] > 600) {
        x[13] = x[8] + 25;
        y[13] = y[8] + 85;
      }
    }

    //Finish level 3 at 75 points
    if (levelThreeOnAndOff) {
      if (points == 3) {
        levelCounter += 1;
        yMoveDrEggman = true;
        levelThreeOnAndOff = false;
      }
    }
    if (yMoveDrEggman) {
      y[8] += ySpeed[6];
    }
  }
  //finish level 4 at 100 points
  if (points == 100) {
    onAndOff = false;
    ctx.beginPath();
    ctx.fillStyle = "aqua";
    ctx.fillRect(0, 0, 700, 600);
    ctx.restore();
    ctx.beginPath();
    ctx.font = "100px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("You Win!!", cnv.width / 2, cnv.height / 2);
    ctx.restore();
  }

  //Laser-player collision detection
  if (
    x[1] - x[9] < 25 &&
    y[1] - y[9] < 25 &&
    x[1] - x[9] > -25 &&
    y[1] - y[9] > -25
  ) {
    console.log(onAndOff);
    onAndOff = false;
    let scoreResponse = 100 - points;
    ctx.beginPath();
    ctx.fillStyle = "aqua";
    ctx.fillRect(0, 0, 700, 600);
    ctx.restore();
    ctx.beginPath();
    ctx.font = "100px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GameOver", cnv.width / 2, cnv.height / 2);
    ctx.restore();
    ctx.beginPath();
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(scoreResponse + " away", cnv.width / 2, cnv.height / 2 + 50);
    ctx.restore();
  }
  if (
    x[1] - x[10] < 25 &&
    y[1] - y[10] < 25 &&
    x[1] - x[10] > -25 &&
    y[1] - y[10] > -25
  ) {
    console.log(onAndOff);
    onAndOff = false;
    let scoreResponse = 100 - points;
    ctx.beginPath();
    ctx.fillStyle = "aqua";
    ctx.fillRect(0, 0, 700, 600);
    ctx.restore();
    ctx.beginPath();
    ctx.font = "100px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GameOver", cnv.width / 2, cnv.height / 2);
    ctx.restore();
    ctx.beginPath();
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(scoreResponse + " away", cnv.width / 2, cnv.height / 2 + 50);
    ctx.restore();
  }
  if (
    x[1] - x[11] < 25 &&
    y[1] - y[11] < 25 &&
    x[1] - x[11] > -25 &&
    y[1] - y[11] > -25
  ) {
    console.log(onAndOff);
    onAndOff = false;
    let scoreResponse = 100 - points;
    ctx.beginPath();
    ctx.fillStyle = "aqua";
    ctx.fillRect(0, 0, 700, 600);
    ctx.restore();
    ctx.beginPath();
    ctx.font = "100px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GameOver", cnv.width / 2, cnv.height / 2);
    ctx.restore();
    ctx.beginPath();
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(scoreResponse + " away", cnv.width / 2, cnv.height / 2 + 50);
    ctx.restore();
  }
}
