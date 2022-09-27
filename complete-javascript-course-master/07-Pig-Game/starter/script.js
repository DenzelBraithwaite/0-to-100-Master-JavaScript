'use strict';

// Player 1
const player1Name = document.querySelector('#name--1');
let player1currentPoints = document.querySelector('#current--1');
let player1TotalScore = document.querySelector('#score--1');
let player1Points = 0;

// Player 2
const player2Name = document.getElementById('name--2');
let player2currentPoints = document.getElementById('current--2');
let player2TotalScore = document.querySelector('#score--2');
let player2Points = 0;

const dice = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const restartBtn = document.querySelector('.btn--restart');
let currentPoints = 0;
let roll = 1;
let player1Turn = true;
// let gameOver = false;

// player1Name.textContent = prompt('Enter player 1 name');
// player2Name.textContent = prompt('Enter player 2 name');

// To create roll effect
const sleepNow = delay => new Promise(resolve => setTimeout(resolve, delay));
const switchTurn = boolean => {
  return !boolean;
};

const hold = () => {
  if (player1Turn) {
    player1Points += currentPoints;
    player1TotalScore.textContent = player1Points;
  } else {
    player2Points += currentPoints;
    player2TotalScore.textContent = player2Points;
  }

  currentPoints = 0;
  player1Turn = switchTurn(player1Turn);
};

const restart = function () {
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to top left, #20c997 0%, #c3fae8 100%)';
  player1Turn = true;
  currentPoints = 0;
  player1Points = 0;
  player2Points = 0;
  player1TotalScore.textContent = 0;
  player1currentPoints.textContent = 0;
  player2currentPoints.textContent = 0;
  player2TotalScore.textContent = 0;
};

async function rollDice() {
  for (let i = 0; i <= 5; i++) {
    roll = Math.ceil(Math.random() * 6);
    document.querySelector('.dice').src = `dice-${roll}.webp`;
    await sleepNow(100);
  }

  if (roll === 1) {
    currentPoints = 0;
    player1Turn = switchTurn(player1Turn);
  } else {
    currentPoints += roll;
  }

  if (player1Turn) {
    player2currentPoints.textContent = 0;
    player1currentPoints.textContent = currentPoints;
  } else {
    player1currentPoints.textContent = 0;
    player2currentPoints.textContent = currentPoints;
  }

  if (player1Turn && currentPoints + player1Points >= 30) {
    player1Points += currentPoints;
    player1TotalScore.textContent = player1Points;
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to top left, red 0%, blue 100%)';
  } else if (!player1Turn && currentPoints + player2Points >= 30) {
    player2Points += currentPoints;
    player2TotalScore.textContent = player2Points;
    document.body.style.backgroundImage =
      'linear-gradient(to top left, red 0%, blue 100%)';
  }
}

dice.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);
restartBtn.addEventListener('click', restart);
