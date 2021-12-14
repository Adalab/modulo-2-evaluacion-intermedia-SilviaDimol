"use strict";

// Constantes generales
const valueSelection = document.querySelector('js-valueSelection');
const button = document.querySelector('js-button');
const message = document.querySelector('js-message');
const playerResult = document.querySelector('js-playerResult');
const computerResult = document.querySelector('js-computerResult');

// Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
function computerPlay() {
    let computerValue = getRandomNumber(10);
    console.log(computerValue);
    if (computerValue < 3) {
        computerValue = "piedra";
    } else if (computerValue >= 3 && computerOption <= 6) {
        computerValue = "papel";
    } else {
        computerValue = "tijera";
    }
    return computerValue;
  }
  function comparePlayerOption() {
    const userOption = valueSelect.value;
    const computerOption = computerPlay();
    if (userOption === computerOption()) {
      console.log(`The number is... ${getRandomNumber()}`);
    } else {
      console.log(`try again`);
    }
  }
function handleClickBtn() {
    // event.preventDefault();
    computer();
}
// Eventos
button.addEventListener('click', handleClickBtn);
