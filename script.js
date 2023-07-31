'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;*/
let highscore = 0;
let x = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.again').addEventListener('click', function () {
  const number = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.number').textContent = number;
  x = number;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const number = x;

  let score = Number(document.querySelector('.score').textContent);
  const checkScore = () =>
    (document.querySelector('.message').textContent = 'You loss game');
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (number == guess) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (number > guess) {
    score -= 1;
    if (score < 0) {
      checkScore();
    } else {
      document.querySelector('.message').textContent = 'Too low';
      document.querySelector('.score').textContent = score;
    }
  } else if (number < guess) {
    score -= 1;
    if (score < 0) {
      checkScore();
    } else {
      document.querySelector('.message').textContent = 'Too high';
      document.querySelector('.score').textContent = score;
    }
  }
});
