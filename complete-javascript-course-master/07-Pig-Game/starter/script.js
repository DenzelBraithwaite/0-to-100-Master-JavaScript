'use strict';

// Player 1
const player1 = document.querySelector('#name--1');
let player1CurrentScore = document.querySelector('#current--1');
let player1TotalScore = document.querySelector('#score--1');
let player1Score = 0;

// Player 2
const player2 = document.getElementById('name--2');
let player2CurrentScore = document.getElementById('current--2');
let player2TotalScore = document.querySelector('#score--2');
let player2Score = 0;

const dice = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const restartBtn = document.querySelector('.btn--restart');
let currentScore = 0;
let roll = 1;
let player1Turn = true;
let gameOver = false;

// player1.textContent = prompt('Enter player 1 name');
// player2.textContent = prompt('Enter player 2 name');

// To create roll effect
const sleepNow = delay => new Promise(resolve => setTimeout(resolve, delay));
const switchTurn = boolean => {
  return !boolean;
};

const hold = () => {
  if (player1Turn) {
    player1Score += currentScore;
    player1TotalScore.textContent = player1Score;
    if (currentScore + player1Score >= 13) {
      alert('Congrats p1 u win');
    }
  } else {
    player2Score += currentScore;
    player2TotalScore.textContent = player2Score;
    if (currentScore + player1Score >= 13) {
      alert('Congrats p1 u win');
    }
  }

  currentScore = 0;
  player1Turn = switchTurn(player1Turn);
};

async function rollDice() {
  for (let i = 0; i <= 5; i++) {
    roll = Math.ceil(Math.random() * 6);
    document.querySelector('.dice').src = `dice-${roll}.webp`;
    await sleepNow(100);
  }

  if (roll === 1) {
    currentScore = 0;
    player1Turn = switchTurn(player1Turn);
  } else {
    currentScore += roll;
  }

  if (player1Turn) {
    player2CurrentScore.textContent = 0;
    player1CurrentScore.textContent = currentScore;
  } else {
    player1CurrentScore.textContent = 0;
    player2CurrentScore.textContent = currentScore;
  }

  if (player1Turn && currentScore + player1Score >= 13) {
    player1Score += currentScore;
    player1TotalScore.textContent = player1Score;
    currentScore = 0;
    alert('p1 win');
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'red';
  } else if (!player1Turn && currentScore + player2Score >= 13) {
    player2Score += currentScore;
    player2TotalScore.textContent = player2Score;
    currentScore = 0;
    alert('p2 win');
  }
}

const restart = function () {
  document.body.style.backgroundImage =
    'linear-gradient(to top left, #20c997 0%, #c3fae8 100%)';
  document.body.style.backgroundColor = 'none';
  document.body.style = 'transition: all 2s ease';

  player1Turn = true;
  currentScore = 0;
  player1Score = 0;
  player2Score = 0;
  player1TotalScore.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player2TotalScore.textContent = 0;
};

dice.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);
restartBtn.addEventListener('click', restart);
