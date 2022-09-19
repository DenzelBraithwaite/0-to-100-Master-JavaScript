'use strict';

const check = document.querySelector('.check');
// let message = document.querySelector('.message').textContent;
let secretNumber = Math.ceil(Math.random() * 20);
const number = document.querySelector('.number').textContent;

let currentScore = 20;
let currentHighscore = 0;
const resetButton = document.querySelector('.again');

document.querySelector('.number').textContent = secretNumber;

const setHighscore = score => {
  if (score > currentHighscore) {
    currentHighscore = score;
    document.querySelector('.highscore').textContent = currentScore;
  }
};

const setScore = () => {
  document.querySelector('.score').textContent = currentScore;
};

const resetGame = () => {
  secretNumber = Math.ceil(Math.random() * 20);
  currentScore = 20;

  document.querySelector('.number').textContent = secretNumber;
  setScore();
};

const preventNegative = number => {
  number <= 0 ? (number = 0) : (number = number);
  return number;
};

const compareNumber = guess => {
  if (!guess) {
    document.querySelector('.message').textContent =
      '🛑 Did you enter a number?';
  } else if (guess === secretNumber) {
    setHighscore(currentScore);
    document.querySelector('.message').textContent = 'Congrats!🎉🎉🎉';
  } else if (guess > secretNumber) {
    currentScore--;
    currentScore = preventNegative(currentScore);
    setScore(currentScore);
    document.querySelector('.message').textContent = 'Too high👇🏾👇🏾👇🏾';
  } else {
    currentScore--;
    currentScore = preventNegative(currentScore);
    setScore(currentScore);
    document.querySelector('.message').textContent = 'Too low☝🏾☝🏾☝🏾';
  }
};

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  compareNumber(guess);
});

resetButton.addEventListener('click', resetGame);
