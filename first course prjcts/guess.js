"use strict";

let secretNumber = Math.trunc(Math.random() * 50) + 1;

let score = 50;
let highScore = 0;

let youWin = new Audio();
youWin.src = "sound effects/you-win.mp3";
let youLose = new Audio();
youLose.src = "sound effects/you-lose.mp3";
let againButton = new Audio();
againButton.src = "sound effects/again.mp3";

let wrongNumber1 = new Audio();
wrongNumber1.src = "wrong number sounds/wrong-number-1.mp3";
let wrongNumber2 = new Audio();
wrongNumber2.src = "wrong number sounds/wrong-number-2.mp3";
let wrongNumber3 = new Audio();
wrongNumber3.src = "wrong number sounds/wrong-number-3.mp3";

let playOnceOnly = false;
let addPointsOnce = false;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess !== secretNumber) {
    score <= 50 && score > 40
      ? ((score -= 2), wrongNumber1.play())
      : score <= 40 && score > 20
      ? ((score -= 5), wrongNumber2.play())
      : score <= 20 && score > 10
      ? ((score -= 10), wrongNumber3.play())
      : score <= 10 && score > 0
      ? (score -= 10)
      : null;

    if (score !== 0) {
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? `Too high, try again...`
          : `Too low, try again...`;

      document.querySelector(".score").textContent = score;
    } else {
      if (!playOnceOnly) {
        youLose.play();
        playOnceOnly = true;
      }

      document.querySelector(".message").textContent = `Sorry you lose. :(...`;
      document.querySelector(".score").textContent = score;

      highScore = score;
      document.querySelector(".highscore").textContent = highScore;

      document.querySelector("body").style.backgroundColor = "#e70808";
    }
  } else if (guess === secretNumber) {
    if (!playOnceOnly) {
      youWin.play();
      playOnceOnly = true;
    }

    document.querySelector(".message").textContent = "Nice, you guessed it!!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#5ac8f3";
    document.querySelector(".number").style.width = "30rem";

    if (!addPointsOnce) {
      document.querySelector(".highscore").textContent = highScore += 120;
      addPointsOnce = true;
    }
  }
});

document.querySelector("#again").addEventListener("click", function () {
  againButton.play();
  playOnceOnly = false;
  addPointsOnce = false;

  secretNumber = Math.trunc(Math.random() * 50) + 1;
  score = 50;

  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector("body").style.backgroundColor = "#222";
});
