const GameBoard = async function () {
  'use strict'
  // initialize an array of length 9 i.e. gameboard squares , with null values to be able to iterate over.
  let displayController = DisplayController;
  let gameBoard = Array.apply(null, Array(9));
  let winner = false;
  let count = 0;
  
  
  
  console.log('lets start this game');
  function getClick () { 
    return new Promise ( acc => {
      Array.from(tiles).forEach(tile => {
      tile.addEventListener('click', setMark)});
       displayController.setThisMark;
       acc();
      })
    };
  while (!winner) {
   
    await getClick();
    // game stops when any player creates a line of 3 equal symbols in any direction. 
    // logic should account for a tie/mutual loss as well. Either checkmate or full board as ending criteria? both?
    count == 9 ? winner = true : winner = false;
  }

  // not a reflection of actual gameplay <placeholder>.
  console.log('end of game, count Xs and Os? ');

  return gameBoard;
};

const DisplayController = function () {
  'use strict'
  let mark = 'x';
 const tiles = document.querySelectorAll('.tile');
 let index = 0;
  let setThisMark = Array.from(tiles).forEach(tile => {
  tile.addEventListener('click', setMark);
 // tile.textContent = index.toString();
  index++;
});
return { setThisMark, }
};

 function setMark() {
 //this.style.backgroundColor == 'hotpink' ? this.style.backgroundColor = 'white' : this.style.backgroundColor ='hotpink';
 this.textContent == '' ? this.textContent = mark : this.textContent = '';
 mark == 'x' ? mark = 'o' : mark = 'x';
 }


// player object, makes sense to have an even/uneven player to determine flow-sequence? 
const Player = (name, symbol) => {
  const getState = () => {
   let currentState = GameBoard.gameBoard
  }

  const setState = () => {

  }
};

const moduleGame = (async function(){
  let gameOne = GameBoard;

  gameOne();

//const p1 = Player('jeanine', 'x');

}());

