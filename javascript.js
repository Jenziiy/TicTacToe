const ticTacToeModule = (function () {
  'use strict'
  let _winner = false;
  let _count = 0;
  let _boardSize = 3;
  const _tiles = document.querySelectorAll('.tile');

  function _setBoardSize(boardSize) {
    _boardSize = boardSize
   }

  function _initializeGame() {
    _createBoard(_boardSize);
  };

  function _createBoard() {
    const board = document.querySelector('.board');

    for(let rowIndex = 0; rowIndex < _boardSize; rowIndex++) {
      const row = document.createElement('div');
      row.classList.add('row');

      for (let columnIndex = 0; columnIndex < _boardSize; columnIndex++) {
        const column = document.createElement('div');
        column.classList.add('tile');

        row.appendChild(column);
      }
      board.appendChild(row);
    }
  }
  
  
  console.log('lets start this game');
  
  // while (!_winner) {
   
  //   getClick();
  //   // game stops when any player creates a line of 3 equal symbols in any direction. 
  //   // logic should account for a tie/mutual loss as well. Either checkmate or full board as ending criteria? both?
  //   _count == 9 ? winner = true : winner = false;
  // }

  // not a reflection of actual gameplay <placeholder>.
  console.log('end of game, count Xs and Os? ');

  const displayController = {
    mark: 'x',
    index: 0,
    setThisMark: Array.from(_tiles).forEach(tile => {
    tile.addEventListener('click', setMark);
  // tile.textContent = index.toString();
    this.index++;
    })
  };

  function setMark() {
  //this.style.backgroundColor == 'hotpink' ? this.style.backgroundColor = 'white' : this.style.backgroundColor ='hotpink';
  this.textContent == '' ? this.textContent = mark : this.textContent = '';
  mark == 'x' ? mark = 'o' : mark = 'x';
  }


// player object, makes sense to have an even/uneven player to determine flow-sequence? 
    const player = (name, symbol) => {
    const getState = () => {
    }
  const setState = () => {
  console.log('hello');
  }
  return setState, getState;
};

  // return { 
  //   setBoardSize: function() { 
  //     _setBoardSize(boardSize);
  //   },
  //   createBoard: function() {
  //     _createBoard();
  //   }
  

  _createBoard();
}());



// const p1 = ticTacToeModule.player('jeanine', 'x');
// p1.getState();
// p1.setState();