'use strict';

let secretNumber = Math.trunc(Math.random()*50) + 1;

let score = 50;
let highScore = 0;

let youWin = new Audio();
youWin.src = 'sound effects/you-win.mp3';
let youLose = new Audio();
youLose.src = 'sound effects/you-lose.mp3';
let wrongNumber = new Audio();
wrongNumber.src = 'sound effects/wrong-number.mp3'
let againButton = new Audio();
againButton.src = 'sound effects/again.mp3'

let playOnceOnly = false

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number!';
    } 
  
else if (guess !== secretNumber) {
    
  if (score > 5) {
    //THIS IS WHAT i GOT
    // if(guess < secretNumber){
    //   document.querySelector('.message').textContent = `Too low, try again...`
    // } else if (guess > secretNumber){
    //   document.querySelector('.message').textContent = `Too high, try again...`;
    // }

    //THIS IS THE SOLUTION JONAS MY MENTOR SHOWED
      document.querySelector('.message').textContent = guess > secretNumber ? 
      `Too high, try again...` : `Too low, try again...`

      score -= 5
      wrongNumber.play();
      
      document.querySelector('.score').textContent = score;
  } else {
      if(!playOnceOnly){
        youLose.play();
        playOnceOnly = true; 
      }

      score === 0 ? highScore = score : null;

      document.querySelector('.message').textContent = `Sorry you lose. :(...`;
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#e70808';
  }
}
  

  /* THIS IS COMMENTED OUT BECAUSE SIMPLIFIED THE CODE AND MADE IT MORE COMPACT */
  
  // else if (guess < secretNumber) {
  //     if (score > 2) {
  //         wrongNumber.play();
  //         document.querySelector('.message').textContent = `Too low, try again`;
  //         score -= 2;
  //         document.querySelector('.score').textContent = score;
  //     } else {
  //         if(!playOnceOnly){
  //           youLose.play();
  //           playOnceOnly = true;
  //         }
  //         document.querySelector('.message').textContent = `Sorry you lose. :(`;
  //         document.querySelector('.score').textContent = 0;

  //         document.querySelector('body').style.backgroundColor = '#e70808';
  //     }
  // }
  
                        
    else if(guess === secretNumber) {
      if(!playOnceOnly){
        youWin.play();
        playOnceOnly = true;
      }
   
      document.querySelector('.message').textContent = 'Nice, you guessed it!!';
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#5ac8f3';
      document.querySelector('.number').style.width = '30rem';

    
        document.querySelector('.highscore').textContent = highScore+=120;
    
    }
                    
    

});

document.querySelector('#again').addEventListener('click', function(){
  againButton.play();
  playOnceOnly = false

  secretNumber = Math.trunc(Math.random()*50) + 1;
  score = 50;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('body').style.backgroundColor = '#222';
});