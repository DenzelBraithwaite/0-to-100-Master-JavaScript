'use strict';

const check = document.querySelector('.check');
let secretNumber = Math.ceil(Math.random() * 20);
let currentScore = 20;
let currentHighscore = 0;
const resetButton = document.querySelector('.again');
let gameOver = false;

// document.querySelector('.number').textContent = secretNumber;
const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

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

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = currentScore;
  setMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
};

const preventNegative = () => {
  currentScore--;
  if (currentScore <= 0) {
    currentScore = 0;
    document.querySelector('body').style.backgroundColor = '#c92a2a';
    setMessage('Sorry, you lose. Try again?🥺');
  }
};

const updateScore = message => {
  currentScore--;
  document.querySelector('.score').textContent = currentScore;
  setMessage(message);
};

const compareNumber = guess => {
  // When player's score is 0
  if (!currentScore) {
    preventNegative(currentScore);

    // When player has already won
  } else if (gameOver) {
    setMessage('🥳You already won, press "Again" to play again!');

    // When player's guess is illegal
  } else if (!guess || guess < 1 || guess > 20) {
    setMessage('🛑 Did you enter a number between 1 and 20?');

    // When player guesses correctly
  } else if (guess === secretNumber) {
    setHighscore(currentScore);
    gameOver = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    setMessage('Congrats!🎉🎉🎉');
    document.querySelector('.number').textContent = secretNumber;

    // When player guesses too high or too low
  } else {
    updateScore(guess > secretNumber ? 'Too high👇🏾👇🏾👇🏾' : 'Too low☝🏾☝🏾☝🏾');
  }
};

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  compareNumber(guess);
});

resetButton.addEventListener('click', resetGame);
