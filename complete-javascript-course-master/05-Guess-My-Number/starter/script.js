'use strict';

const check = document.querySelector('.check');
let secretNumber = Math.ceil(Math.random() * 20);
const number = document.querySelector('.number').textContent;

let currentScore = 20;
let currentHighscore = 0;
const resetButton = document.querySelector('.again');
let gameOver = false;

document.querySelector('.number').textContent = secretNumber;

const setHighscore = score => {
  if (score > currentHighscore) {
    currentHighscore = score;
    document.querySelector('.highscore').textContent = currentScore;
  }
};

const resetGame = () => {
  secretNumber = Math.ceil(Math.random() * 20);
  currentScore = 20;
  gameOver = false;

  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.message').textContent = 'Start guessing...';
};

const preventNegative = () => {
  currentScore--;
  if (currentScore <= 0) {
    currentScore = 0;
    document.querySelector('.message').textContent =
      '😭Sorry, you lose. Try again?🥺';
  }
};

const compareNumber = guess => {
  if (!currentScore) {
    preventNegative(currentScore);
  } else if (gameOver) {
    document.querySelector('.message').textContent =
      '🥳You already won, press "Again" to play again!';
  } else if (!guess || guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      '🛑 Did you enter a number between 1 and 20?';
  } else if (guess === secretNumber) {
    setHighscore(currentScore);
    gameOver = true;
    document.querySelector('.message').textContent = 'Congrats!🎉🎉🎉';
  } else if (guess > secretNumber) {
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
    document.querySelector('.message').textContent = 'Too high👇🏾👇🏾👇🏾';
  } else {
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
    document.querySelector('.message').textContent = 'Too low☝🏾☝🏾☝🏾';
  }
};

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  compareNumber(guess);
});

resetButton.addEventListener('click', resetGame);
