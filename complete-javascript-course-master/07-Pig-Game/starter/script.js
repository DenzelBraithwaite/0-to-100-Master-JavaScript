'use strict';

// Player 1
const player1 = document.querySelector('#name--1');
let player1CurrentScore = document.querySelector('#current--1');
let player1Score = 0;

// Player 2
const player2 = document.getElementById('name--2');
let player2CurrentScore = document.getElementById('current--2');
let player2Score = 0;

const dice = document.querySelector('.dice');
const holdButton = document.querySelector('.btn--hold');
let currentScore = 0;
let roll = 1;
let player1Turn = true;

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
    document.getElementById('score--1').textContent = player1Score;
  } else {
    player2Score += currentScore;
    document.querySelector('#score--2').textContent = player2Score;
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
}

dice.addEventListener('click', rollDice);
holdButton.addEventListener('click', hold);

const gameOver = playerScore => {
  if (playerScore >= 100) return true;
};

// Game ends at 100 points
// Turn ends if current roll is 1 or player holds
// When player holds, current points get added to score
// When player rolls 1, current points are lost
