// Pega o botão
const button = document.querySelector("button");
// Pega os pontos dos jogadores pra mostrar
const player1Score = document.querySelector("#pontos_player_1");
const player2Score = document.querySelector("#pontos_player_2");
// pega a placa principal
const board = document.querySelector("#tabuleiro");
const cells = document.querySelectorAll(".casa");

// cria um array com 9 posições
let gameArray = new Array(9);
// cria uma variável pra salvar o turno do jogador
let playerTurn = 1;
// cria uma variável pra salvar os pontos do jogador
let player1Points = 0;
let player2Points = 0;

// cria uma função para preencher o array com X ou O
function fillArray(position) {
  if (playerTurn === 1) {
    gameArray[position] = "X";
    playerTurn = 2;
  } else {
    gameArray[position] = "O";
    playerTurn = 1;
  }
}

// cria uma função para verificar se o jogo acabou
function checkGameOver() {
  if (checkWin()) {
    if (playerTurn !== 1) {
      player1Points++;
      const span = document.createElement("span");
      span.innerHTML = player1Points;
      player1Score.innerHTML = `
        Jogador 1
        <span>${player1Points}</span>
        pontos
      `;
      alert("Jogador 1 venceu!");
    } else {
      player2Points++;
      const span = document.createElement("span");
      span.innerHTML = player2Points;
      player2Score.innerHTML = `
        Jogador 2
        <span>${player2Points}</span>
        pontos
      `;
      alert("Jogador 2 venceu!");
    }
    clearGame();
  } else if (checkDraw()) {
    alert("Empate!");
    clearGame();
  }
}

// cria a função para verificar se o jogo acabou com uma vitória
function checkWin() {
  if (
    gameArray[0] === gameArray[1] &&
    gameArray[1] === gameArray[2] &&
    gameArray[0] !== undefined
  ) {
    return true;
  } else if (
    gameArray[3] === gameArray[4] &&
    gameArray[4] === gameArray[5] &&
    gameArray[3] !== undefined
  ) {
    return true;
  } else if (
    gameArray[6] === gameArray[7] &&
    gameArray[7] === gameArray[8] &&
    gameArray[6] !== undefined
  ) {
    return true;
  } else if (
    gameArray[0] === gameArray[3] &&
    gameArray[3] === gameArray[6] &&
    gameArray[0] !== undefined
  ) {
    return true;
  } else if (
    gameArray[1] === gameArray[4] &&
    gameArray[4] === gameArray[7] &&
    gameArray[1] !== undefined
  ) {
    return true;
  } else if (
    gameArray[2] === gameArray[5] &&
    gameArray[5] === gameArray[8] &&
    gameArray[2] !== undefined
  ) {
    return true;
  } else if (
    gameArray[0] === gameArray[4] &&
    gameArray[4] === gameArray[8] &&
    gameArray[0] !== undefined
  ) {
    return true;
  } else if (
    gameArray[2] === gameArray[4] &&
    gameArray[4] === gameArray[6] &&
    gameArray[2] !== undefined
  ) {
    return true;
  } else {
    return false;
  }
}

// cria uma função para verificar se o jogo acabou com um empate
function checkDraw() {
  let draw = true;
  for (let i = 0; i < gameArray.length; i++) {
    if (gameArray[i] == undefined) {
      draw = false;
    }
  }
  return draw;
}

// cria uma função para limpar o jogo
function clearGame() {
  gameArray = new Array(9);
  playerTurn = 1;
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("casa_selecionada");
    cells[i].classList.remove("x");
    cells[i].classList.remove("o");
  }
}

// cria uma função para iniciar o jogo
function startGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("x");
    cells[i].classList.remove("o");
    cells[i].addEventListener("click", function () {
      console.log(playerTurn);
      this.classList.add("casa_selecionada");
      if (typeof gameArray[i] == "undefined") {
        if (playerTurn === 1) {
          this.classList.add("x");
        } else {
          this.classList.add("o");
        }
        fillArray(i);
        checkGameOver();
      }
    });
  }
}

// inicia o jogo
startGame();

// reinicia o jogo
button.addEventListener("click", function () {
  clearGame();
});