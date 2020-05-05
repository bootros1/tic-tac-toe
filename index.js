const readlineSync = require("readline-sync");

console.log("Welcome to Tic Tac Toe!");
console.log("What do you want to do?");
let option;
let player = 1;
let winning = false;
const board = [
  [
    { player: -1, input: false },
    { player: -1, input: false },
    { player: -1, input: false },
  ],
  [
    { player: -1, input: false },
    { player: -1, input: false },
    { player: -1, input: false },
  ],
  [
    { player: -1, input: false },
    { player: -1, input: false },
    { player: -1, input: false },
  ],
];

function switchPlayers() {
  if (player === 1) {
    player = 2;
  } else {
    player = 1;
  }
}

function userWins() {}

function displayCurrentStatus() {
  for (let i = 0; i < 3; i++) {
    let str = "";
    for (let j = 0; j < 3; j++) {
      if (board[i][j].input === true) {
        if (board[i][j].player === 1) {
          str = str + "O ";
        } else if (board[i][j].player === 2) {
          str = str + "X ";
        }
      } else {
        str = str + "[] ";
      }
    }
    console.log(str);
  }
}

function insertIntoBoard(player, col) {
  let row = 2;
  while (board[row][col].input === true && row > 0) {
    row--;
  }
  board[row][col].player = player;
  board[row][col].input = true;
}

while (!winning) {
  option = readlineSync.question(
    `Player ${player}: it is your turn. Which column do you like to put your token into?`
  );
  //this will insert into the col base on what user types in.
  insertIntoBoard(player, option - 1);
  displayCurrentStatus();
  switchPlayers();
  if (userWins()) {
    winning = true;
  }
}
