'use strict';

// Player 1
const player1Name = document.querySelector('#name--0');
let player1currentPoints = document.querySelector('#current--0');
let player1TotalScore = document.querySelector('#score--0');
let player1Points = 0;

// Player 2
const player2Name = document.getElementById('name--1');
let player2currentPoints = document.getElementById('current--1');
let player2TotalScore = document.querySelector('#score--1');
let player2Points = 0;

// Game controls / buttons
const dice = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const restartBtn = document.querySelector('.btn--restart');

let currentPoints = 0;
let roll = 1;
let activePlayer = 0;

// To create roll effect
const sleepNow = delay => new Promise(resolve => setTimeout(resolve, delay));

async function rollDice() {
  for (let i = 0; i <= 5; i++) {
    roll = Math.ceil(Math.random() * 6);
    document.querySelector('.dice').src = `dice-${roll}.webp`;
    await sleepNow(100);
  }

  if (roll === 1) {
    currentPoints = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    switchTurn();
  } else {
    currentPoints += roll;
  }

  document.querySelector(`#current--${activePlayer}`).textContent =
    currentPoints;
}

const switchTurn = () => {
  if (activePlayer) {
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--2').classList.remove('player--active');
    activePlayer = 0;
  } else {
    document.querySelector('.player--2').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    activePlayer = 1;
  }
};

const hold = () => {
  if (activePlayer === 0) {
    player1Points += currentPoints;
    player1TotalScore.textContent = player1Points;
  } else {
    player2Points += currentPoints;
    player2TotalScore.textContent = player2Points;
  }

  currentPoints = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  switchTurn();
};

const restart = function () {
  activePlayer = 0;
  currentPoints = 0;
  player1Points = 0;
  player2Points = 0;
  player1TotalScore.textContent = 0;
  player1currentPoints.textContent = 0;
  player2currentPoints.textContent = 0;
  player2TotalScore.textContent = 0;

  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to top left, #20c997 0%, #c3fae8 100%)';
  document.querySelector('.player--1').classList.add('player--active');
  document.querySelector('.player--2').classList.remove('player--active');
};

dice.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);
restartBtn.addEventListener('click', restart);
