'use strict';
//let guess = document.querySelector('.message');
//console.log(guess);
// let number = (document.querySelector('.number').textContent = 13);
//let scoreMas = (document.querySelector('.score').textContent = 10);
//let myNum = (document.querySelector('.guess').value = 23);
// console.log(myNum);
let Btn = document.querySelector('.check');
// console.log(Btn);
let resetBtn = document.querySelector('.again');
//----------------------------------START-GAME-----------------------------------------------------//
let secretNum = Math.trunc(Math.random() * 20) + 1; // method to give you a random number
let score = 20; // state varible
let highScore = 0;
//---------Define Secret Number To Compare it with the Guess Number ------------------//
//let number = (document.querySelector('.number').textContent = secretNum); // to give random number
// -------------------------- Working with Massege and check Btn-----------//
Btn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  // when is there no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    // when the player win
  } else if (guess === secretNum) {
    let guess = (document.querySelector('.message').textContent =
      'correct answer');
    document.querySelector('.number').textContent = secretNum; // to don't  know about secret number
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when the guess is too high
  else if (guess !== secretNum) {
    if (score > 1) {
      let guess = (document.querySelector('.message').textContent =
        guess > secretNum ? '📈 Too high!' : '📉 Too low!');
      score--;
      let scoreMas = (document.querySelector('.score').textContent = score); // use dom  to display new data again
    } else {
      let guess = (document.querySelector('.message').textContent =
        'You Lost The Game');
      let scoreMas = (document.querySelector('.score').textContent = 0);
    }
  }
});

//   else if (guess > secretNum) {
//     if (score > 1) {
//       let guess = (document.querySelector('.message').textContent = 'Too High');
//       score--;
//       let scoreMas = (document.querySelector('.score').textContent = score); // use dom  to display new data again
//     } else {
//       let guess = (document.querySelector('.message').textContent =
//         'You Lost The Game');
//       let scoreMas = (document.querySelector('.score').textContent = 0);
//     }
//     // when the guess is too Low
//   } else if (guess < secretNum) {
//     if (score > 1) {
//       let guess = (document.querySelector('.message').textContent = 'Too Low');
//       score--;
//       let scoreMas = (document.querySelector('.score').textContent = score); // use dom  to display new data again
//     } else {
//       let guess = (document.querySelector('.message').textContent =
//         'You Lost The Game');
//       let scoreMas = (document.querySelector('.score').textContent = 0);
//     }
//   }
// });
/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
*/
//-----------------------  reset function ________-------------------------------------
resetBtn.addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
