'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overaly');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(btnOpenModal[i].textContent);
}
