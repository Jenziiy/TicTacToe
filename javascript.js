// const tiles = document.querySelectorAll('.tile');
// Array.from(tiles).forEach(tile => {
// tile.addEventListener('click', setColor)
// });

// function setColor() {
// this.style.backgroundColor == 'hotpink' ? this.style.backgroundColor = 'white' : this.style.backgroundColor ='hotpink';
// }



const GameBoard = (function () {
  'use strict'
  // initialize an array of length 9 (gameboard squares) , with null values to be able to iterate over.
  let gameBoard = Array.apply(null, Array(9));
  let winner = false;
  let count = 0;

  
  console.log('lets start this game');
  
  while (!winner) {
    console.log('hello');
    count ++;
    count == 9 ? winner = true : winner = false;
  }

  console.log('end of game, count Xs and Os? ');

  return gameBoard;
}());

const DisplayController = (function () {
  'use strict'

}());

const Player = (name, state) => {
  const getState = () => {
   let currentState = GameBoard.gameBoard
  }

  const setState = () => {

  }
};