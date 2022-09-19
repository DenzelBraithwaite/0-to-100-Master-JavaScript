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
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const preventNegative = () => {
  currentScore--;
  if (currentScore <= 0) {
    currentScore = 0;
    document.querySelector('body').style.backgroundColor = '#f03e3e';
    document.querySelector('.message').textContent =
      '😭Sorry, you lose. Try again?🥺';
  }
};

const compareNumber = guess => {
  // When player's score is 0
  if (!currentScore) {
    preventNegative(currentScore);

    // When player has already won
  } else if (gameOver) {
    document.querySelector('.message').textContent =
      '🥳You already won, press "Again" to play again!';

    // When player's guess is illegal
  } else if (!guess || guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      '🛑 Did you enter a number between 1 and 20?';

    // When player guesses correctly
  } else if (guess === secretNumber) {
    setHighscore(currentScore);
    gameOver = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Congrats!🎉🎉🎉';

    // When player guesses too high
  } else if (guess > secretNumber) {
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
    document.querySelector('.message').textContent = 'Too high👇🏾👇🏾👇🏾';

    // When player guesses too low
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
