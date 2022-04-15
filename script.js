'use strict';

const message = document.querySelector('.message');
var random = Math.trunc(Math.random() * 20) + 1;
var score = document.querySelector('.score');
const number = document.querySelector('.number');
var highscore = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value); //since it is a input, we need value property

  if (!input) {
    message.textContent = '⛔ Please type in the value ⛔';
  } else if (input === random) {
    number.textContent = random;
    random = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'You guessed it correctly! 🎉🥳';
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.style.transition = 'all 0.3s';
    if (
      (highscore.textContent === 0) |
      (highscore.textContent <= score.textContent)
    ) {
      highscore.textContent = score.textContent;
    } else {
      highscore.textContent = highscore.textContent;
    }
  } else if (input <= random) {
    if (score.textContent > '1') {
      message.textContent = 'Too low';
      score.textContent--;
    } else {
      message.textContent = '😥 You Lost The Game 😥';
      document.body.style.backgroundColor = 'Red';
      score.textContent = '0';
      number.textContent = random;
      random = Math.trunc(Math.random() * 20) + 1;
      number.style.width = '30rem';
      number.style.transition = 'all 0.3s';
    }
  } else if (input >= random) {
    if (score.textContent > '1') {
      message.textContent = 'Too high';
      score.textContent--;
    } else {
      message.textContent = '😥 You Lost The Game 😥';
      document.body.style.backgroundColor = 'Red';
      score.textContent = '0';
      number.textContent = random;
      random = Math.trunc(Math.random() * 20) + 1;
      number.style.width = '30rem';
      number.style.transition = 'all 0.3s';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  message.textContent = 'Start Guessing...';
  number.textContent = '?';
  score.textContent = '20';
  number.style.width = '15rem';
  number.style.transition = 'all 0.3s';
  document.querySelector('.guess').value = '';
});
