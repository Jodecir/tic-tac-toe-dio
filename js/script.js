let player, winner = null;
let selectedPlayer = document.getElementById('selectedPlayer');
let selectedWinner = document.getElementById('selectedWinner');

let writePencilSound=document.getElementById("writePencilSound");
let writePencilSound2=document.getElementById("writePencilSound2");

shufflePlayer();

function shufflePlayer() {
  if(Math.floor(Math.random() * 2)==0) {
      player = "X";
      selectedPlayer.innerText="X"; 
      selectedPlayer.style.color='#eecc0ea4'; 
  }else{
      player = "O";
      selectedPlayer.innerText="O";
      selectedPlayer.style.color='#0eee46a4';
  }
}

function selectBox(id) {
  if (winner !== null) {
    return;
  }

  let box = document.getElementById(id);

  if (box.innerHTML !== '!') {
    return;
  }

  box.innerHTML = player;
  box.style.color = '#000';

  changePlayer(player);
  checkWinner();
}

function changePlayer(value) {
  player = value;
  selectedPlayer.innerHTML = player;
  
  if(player=='O') {
    player='X';
    selectedPlayer.innerText='X';
    selectedPlayer.style.color='#eecc0ea4';
    writePencilSound.play();

  }else{
    player='O';
    selectedPlayer.innerText='O';
    selectedPlayer.style.color='#0eee46a4';
    writePencilSound2.play();
  }
}

function checkWinner() {
  let box1 = document.getElementById(1);
  let box2 = document.getElementById(2);
  let box3 = document.getElementById(3);
  let box4 = document.getElementById(4);
  let box5 = document.getElementById(5);
  let box6 = document.getElementById(6);
  let box7 = document.getElementById(7);
  let box8 = document.getElementById(8);
  let box9 = document.getElementById(9);

  if (checkOrder(box1,box2,box3)) {
    changeBoxColor(box1,box2,box3);
    changeWinner(box1);
    return;
  }
  
  if (checkOrder(box4,box5,box6)) {
    changeBoxColor(box4,box5,box6);
    changeWinner(box4);
    return;
  }
  
  if (checkOrder(box7,box8,box9)) {
    changeBoxColor(box7,box8,box9);
    changeWinner(box7);
    return;
  }
  
  if (checkOrder(box1,box4,box7)) {
    changeBoxColor(box1,box4,box7);
    changeWinner(box1);
    return;
  }

  if (checkOrder(box2,box5,box8)) {
    changeBoxColor(box2,box5,box8);
    changeWinner(box2);
    return;
  }
  
  if (checkOrder(box3,box6,box9)) {
    changeBoxColor(box3,box6,box9);
    changeWinner(box3);
    return;
  }
  
  if (checkOrder(box1,box5,box9)) {
    changeBoxColor(box1,box5,box9);
    changeWinner(box1);
    return;
  }
  
  if (checkOrder(box3,box5,box7)) {
    changeBoxColor(box3,box5,box7);
    changeWinner(box3);
  }
}

function changeWinner(box) {
  winner = box.innerHTML;
  selectedWinner.innerHTML = winner;
  
  if(winner=='O') {
    selectedWinner.innerText='O Wins';
    selectedWinner.style.color='#0eee46a4';

  }else{
    selectedWinner.innerText='X Wins';
    selectedWinner.style.color='#eecc0ea4';
  }
}

function changeBoxColor(box1,box2,box3) {
  box1.style.background = '#0eee46a4';
  box2.style.background = '#0eee46a4';
  box3.style.background = '#0eee46a4';
}

function checkOrder(box1,box2,box3) {
  let equal = false;
  
  if (box1.innerHTML !== '!' && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML) {
    equal = true;
  }
  return equal;
}

function restart() {
  winner = null;
  selectedWinner.innerHTML = 'Tic-Tac-Toe';

  for (let i = 1; i <= 9; i++) {
      let box = document.getElementById(i);
      box.style.background = '#eee';
      box.style.color = '#eee';
      box.innerHTML = '!';
  }
}