'use strict';

const player1 = document.querySelector('#name--1');
const player1Score = document.querySelector('#score--1');

const player2 = document.getElementById('name--2');
const player2Score = document.getElementById('score--2');

const dice = document.querySelector('.dice');
let currentRoll = 0;

// player1.textContent = prompt('Enter player 1 name');
// player2.textContent = prompt('Enter player 2 name');

const sleepNow = delay => new Promise(resolve => setTimeout(resolve, delay));

async function rollDice() {
  let roll = Math.ceil(Math.random() * 6);
  for (let i = 0; i <= 5; i++) {
    roll = Math.ceil(Math.random() * 6);
    document.querySelector('.dice').src = `dice-${roll}.webp`;
    await sleepNow(100);
  }
}

dice.addEventListener('click', rollDice);

const gameOver = playerScore => {
  if (playerScore >= 100) return true;
};

// Game ends at 100 points
// Turn ends if current roll is 1 or player holds
// When player holds, current points get added to score
// When player rolls 1, current points are lost
