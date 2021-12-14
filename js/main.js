'use strict';

/*//Variables globales

const button = document.querySelector('.js-button');
const playerInput = document.querySelector('.js-playerInput');

//Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
function displayMessage() {
    const playerValue = playerInput.value;
    console.log(`Tu movimiento es: ` + playerValue);
}
function changePoints() {
    const randomNumber = getRandomNumber(10);
    if (randomNumber < 3) {
        let computerValue = 'Piedra';
    } else if (randomNumber >= 6) {
        let computerValue = 'Papel';
    } else if (randomNumber > 6) {
        let computerValue = 'Tijera';
    }
    console.log(`El movimiento del ordenador es: ` + computerValue);
}
function handleClickPlay(event) {
    event.preventDefault();
    message()
    result()
}
//Listeners
button.addEventListener('click', handleClickPlay); */

"use strict";
// elementos HTML
const valueSelection = document.querySelector('js-valueSelection');
const button = document.querySelector('js-button');
const message = document.querySelector('js-message');
const playerInput = document.querySelector('js-playerInput');
const computerInput = document.querySelector('js-computerInput');


"use strict";

// Constantes generales
const valueSelection = document.querySelector('js-valueSelection');
const button = document.querySelector('js-button');
const message = document.querySelector('js-message');
const playerResult = document.querySelector('js-playerResult');
const computerResult = document.querySelector('js-computerResult');

// funciones
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
// operaciones
button.addEventListener('click', handleClickBtn);
