//Create Board
console.log("Welcome to Tic Tac Toe")

const Board = [
  [" "," "," "],
  [" "," "," "],
  [" "," "," "]
];

Board[0][2] = "x";

console.log(
`-------------
| ${Board[0][0]} | ${Board[0][0]} | ${Board[0][0]} |
-------------
| ${Board[0][0]} | ${Board[0][0]} | ${Board[0][0]} |
-------------
| ${Board[0][0]} | ${Board[0][0]} | ${Board[0][0]} |
-------------
`);
//Create players
//Create check for winner
//Create Game Loop