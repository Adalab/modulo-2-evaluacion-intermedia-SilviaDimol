"use strict";

// Constantes
const playerSelection = document.querySelector(".js-playerSelection");
const button = document.querySelector(".js-button");
const message = document.querySelector(".js-message");
const form = document.querySelector(".js-form");
const tries = document.querySelector(".js-tries");

// Crear número random y número de intentos
const max = 9;
let triesNumber = 10;
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(max);
let computer =  Game();

// Asociaciones número-objeto
function Game() {
  if (randomNumber < 3) {
    console.log("El ordenador escoge la piedra");
    return "piedra";
  } else if (randomNumber <= 6) {
    console.log("El ordenador escoge el papel");
    return "papel";
  } else {
    console.log("El ordenador escoge la tijera");
    return "tijera";
  }
}
// Juego en sí
function checkNumber() {
  const player = playerSelection.value;
  
  if (player === "piedra") {
    
    if ( computer === "piedra") {
      message.innerHTML = "empate";
    } else if ( computer === "tijera") {
      message.innerHTML = "has ganado";
    } else if ( computer === "papel") {
      message.innerHTML = "has perdido";
    }
  }
   
    else if (player === "tijera") {
      if ( computer === "piedra") {
        message.innerHTML = "has perdido";
      } else if ( computer === "tijera") {
        message.innerHTML = "empate";
      } else if ( computer === "papel") {
        message.innerHTML = "has ganado";
      }
} 
 else if (player === "papel") {
      if ( computer === "piedra") {
        message.innerHTML = "has perdido";
      } else if ( computer === "tijera") {
        message.innerHTML = "empate";
      } else if ( computer === "papel") {
        message.innerHTML = "has ganado";
      }
    }
  }

//  Eventos
btn.addEventListener("click", handleClick);
function handleClick(ev) {
  ev.preventDefault();
  if (triesNumber > 0) {
    triesNumber--;
    tries.innerHTML = `Tienes ${triesNumber} intentos`;
    checkNumber();
    r = getRandomNumber(max);
    computer =  Game();
  }
   else {
    tries.innerHTML = "No te quedan más intentos";
  }
}