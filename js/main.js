"use strict";

// Constantes
const playBtn = document.querySelector(".play");
const moveInput = document.querySelector(".js_move");
const resultInput = document.querySelector(".js_result");
const computerInput = document.querySelector(".js_counter_lost");
const playerInput = document.querySelector(".js_counter_win");
// Para que se recargue el juego al finalizar partida (llegar a 10)
const reloadBtn = document.querySelector(".reload");

// Variables globales
let playerScore = 0;
let computerScore = 0;
// Hay que contar los movimientos porque nos dicen que solo pueden llegar a 10
let moves = 0;

//Funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Generar jugada aleatoria (la del ordenador)

function generarJugadaAleatoria() {
  let moveComputer = "";
  let number = getRandomNumber(9);
  if (number <= 3) {
    moveComputer = "piedra";
  } else if (number <= 6) {
    moveComputer = "papel";
  } else {
    moveComputer = "tijera";
  }
  return moveComputer;
}

// Obtener jugada de la usuaria

function obtenerJugadaUsuaria() {
  return moveInput.value;
}
// Comparar jugadas y ver quién ha ganado

function playGame() {
  let moveComputer = generarJugadaAleatoria();
  let movePlayer = obtenerJuagadaUsuaria();
  console.log("jugada computadora" + moveComputer);
  console.log("jugada usuaria" + movePlayer);
  //Para acumular movimientos (nº de jugadas)
  moves++;
  console.log(moves);

  if (moveComputer === movePlayer) {
    //empate
    resultInput.innerHTML = "empate";
  } else if (movePlayer === "piedra") {
    if (moveComputer === "papel") {
      resultInput.innerHTML = "has perdido";
      computerScore++;
    } else if (moveComputer === "tijera") {
      resultInput.innerHTML = "has ganado";
      playerScore++;
    }
  } else if (movePlayer === "tijera") {
    if (moveComputer === "piedra") {
      resultInput.innerHTML = "has perdido";
      computerScore++;
    } else if (moveComputer === "papel") {
      resultInput.innerHTML = "has ganado";
      playerScore++;
    }
  } else if (movePlayer === "papel") {
    if (moveComputer === "tijera") {
      resultInput.innerHTML = "has perdido";
      computerScore++;
    } else if (moveComputer === "piedra") {
      resultInput.innerHTML = "has ganado";
      playerScore++;
    }
  }
  // Para pintar los resultados
  computerInput.innerHTML = "Ordenador:" + computerScore;
  playerInput.innerHTML = "Jugadorx:" + playerScore;
}

// bonus: Finalizar juego (se llegue a 10 jugadas)
function gameOver() {
  if (moves === 10) {
    if (playerScore > computerScore) {
      resultInput.innerHTML = "Has ganado el juego";
    } else if (computerScore > playerScore) {
      resultInput.innerHTML = "Has perdido el juego";
    } else {
      resultInput.innerHTML = "Empate";
    }
    //Para esconder el botón al finalizar partida (llegar a 10)
    playBtn.classList.add("hidden");
    reloadBtn.classList.remove("hidden");
  }
}

// Mostrar resultados: quién ha ganado y las puntuaciones

function handleClickPlayGame(ev) {
  ev.preventDefault();
  // LLamar a la función
  playGame();
  // Llamar a la función
  gameOver();
}
// Declaro la función para lo del boton al finalizar
function handleClickReload(ev){
    ev.preventDefault();
    playBtn.classList.add("hidden");
    reloadBtn.classList.remove("hidden");
    //Para poner los contadores a 0 (también s epuede hacer con locationreload)
    playerScore = 0;
    computerScore = 0;
    moves = 0;
    resultInput.innerHTML = 'Vamos a jugar'
    computerInput.innerHTML = 'Ordenador: ' + computerScore;
    playerInput.innerHTML = 'Jugardorx: ' + playerScore;
}


//Eventos
playBtn.addEventListener("click", handleClickPlayGame);
// Para lo del botón al acabar la partida
reloadBtn.addEventListener('click, handleClickReload')