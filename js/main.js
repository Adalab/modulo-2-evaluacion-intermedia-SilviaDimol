"use strict";

// Constantes globales
const button = document.querySelector('.js-button');
const valueSelection = document.querySelector('.js-valueSelection');

//Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
function displayMessage() {
    const userValue = userSelection.value;
    console.log(`Tu movimiento es: ` + userValue);
}


function getComputerValue() {
    const randomNumber = getRandomNumber(10);
    let computerValue = '';
    if (randomNumber < 3) {
        computerValue = 'Piedra';
    } else if (randomNumber >= 6) {
        computerValue = 'Papel';
    } else if (randomNumber > 6) {
        computerValue = 'Tijera';
    }
    console.log(`El movimiento de la computadora es: ` + computerValue);
}


function handleClickPlay(event) {
    event.preventDefault();
    displayMessage()
    getComputerValue()
}
//Listeners
button.addEventListener('click', handleClickPlay);