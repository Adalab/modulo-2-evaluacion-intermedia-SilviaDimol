'use strict';

//Variables globales

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
button.addEventListener('click', handleClickPlay);

