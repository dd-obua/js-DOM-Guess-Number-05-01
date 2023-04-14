'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const checkBtn = document.querySelector('.check');
const outputMsg = document.querySelector('.msg');
const result = document.querySelector('.result');
const highestScore = document.querySelector('.highest-score');
const body = document.querySelector('body');
const guessInput = document.querySelector('.guess');
const scoreOuput = document.querySelector('.score');

// Refactor using functions
const displayMsg = function (msg) {
  outputMsg.textContent = msg;
};

let score = 20;
let maxScore = 0;

checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // No input
  if (!guess) {
    displayMsg('No number!');
  }

  // Correct guess
  else if (guess === secretNumber) {
    result.textContent = guess;
    displayMsg('Correct number!');
    if (score > maxScore) maxScore = score;
    highestScore.textContent = maxScore;

    body.style.background = '#60b347';
    guessInput.style.background = '#60b347';
    result.style.fontSize = '80px';
    result.style.padding = '24px 48px';
    result.style.borderRadius = '100px';
  }

  // Wrong guess
  else if (guess !== secretNumber) {
    // Out of range
    if (guess < 1 || guess > 20) {
      displayMsg('Out of range (1 to 20)');
    }
    // Within range
    else if (score > 1) {
      displayMsg(guess < secretNumber ? 'Too low!' : 'Too high!');
      score--;
      scoreOuput.textContent = score;
    } else {
      displayMsg('You lost the game');
      score = 0;
      scoreOuput.textContent = score;
    }
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  body.style.background = '#333';
  result.style.fontSize = '60px';
  result.style.padding = '8px 36px';
  result.style.borderRadius = '0';
  guessInput.style.background = '#333';

  result.textContent = '?';
  guessInput.value = '';
  outputMsg.textContent = 'Start guessing ...';
  score = 20;
  scoreOuput.textContent = score;
  highestScore.textContent = maxScore;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
