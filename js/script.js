let player = null;
let selectedPlayer = document.getElementById('selectedPlayer');

changePlayer('X');

function selectBox(id) {
  let box = document.getElementById(id);

  if (box.innerHTML !== '-') {
    return;
  }

  box.innerHTML = player;
  box.style.color = '#000';

  if (player === 'X') {
    player = 'O';
  }else {
    player = 'X';
  }
  changePlayer(player);
}

function changePlayer(valor) {
  player = valor;
  selectedPlayer.innerHTML = player;
}