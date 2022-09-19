'use strict';

const check = document.querySelector('.check');

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    console.log('Please enter a value');
  } else {
    console.log(guess);
  }
});
