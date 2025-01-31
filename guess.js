'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highScore = 0;

let youWin = new Audio();
youWin.src = 'sound effects/you-win.mp3';
let youLose = new Audio();
youLose.src = 'sound effects/you-lose.mp3';
let wrongNumber = new Audio();
wrongNumber.src = 'sound effects/wrong-number.mp3'

let playOnceOnly = false

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number!';
  } 
  
  else if (guess > secretNumber) {
      if (score > 5) {
          wrongNumber.play();
          document.querySelector('.message').textContent = `Too high, try again.`;
          score -= 5;
          document.querySelector('.score').textContent = score;
      } else {
          if(!playOnceOnly){
            youLose.play();
            playOnceOnly = true; 
          }
          document.querySelector('.message').textContent = `Sorry you lose. :(`;
          document.querySelector('.score').textContent = 0;

          document.querySelector('body').style.backgroundColor = '#e70808';
      }
  }
  
  else if (guess < secretNumber) {
      if (score > 5) {
          wrongNumber.play();
          document.querySelector('.message').textContent = `Too low, try again`;
          score -= 5;
          document.querySelector('.score').textContent = score;
      } else {
          if(!playOnceOnly){
            youLose.play();
            playOnceOnly = true;
          }
          document.querySelector('.message').textContent = `Sorry you lose. :(`;
          document.querySelector('.score').textContent = 0;

          document.querySelector('body').style.backgroundColor = '#e70808';
      }
  }
  
                        
    else if(guess === secretNumber) {
      if(!playOnceOnly){
        youWin.play();
        playOnceOnly = true;
      }
   
      document.querySelector('.message').textContent = 'Nice, you guessed it!!';
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#5ac8f3';
      document.querySelector('.number').style.width = '30rem';

      if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
                    
    

});

document.querySelector('#again').addEventListener('click', function(){
  playOnceOnly = false

  secretNumber = Math.trunc(Math.random()*20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('body').style.backgroundColor = '#222';
});