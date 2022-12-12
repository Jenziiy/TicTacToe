const ticTacToeModule = (function () {
  'use strict'
  let _winner = false;
  let _count = 0;
  let _boardSize = 3;
  let _mark = 'x';
  let tiles = document.getElementsByClassName('tile');

  
  function _displayController() {
    // add eventlistener for any tile.
    document.body.addEventListener('click', (e) => { if ( e.target.classList == 'tile' ) {
      setMark(e.target);
      _count++;

      if (_count > 3){
        let scoresArr = Array.from(tiles).map(tile=>tile.textContent);
           let arrX = [];//scoresArr.filter( item => item == 'x' );
           let arrO = []; //scoresArr.filter( item => item == 'o' );
          console.log(scoresArr.indexOf('x'));
          for (let i = 0 ; i<scoresArr.length; i++) {
            if ( scoresArr[i] === 'x' ) {
              arrX.push(i);
            } else if ( scoresArr[i] === 'o') {
              arrO.push(i);
            }
          }
          if (arrO.length > 2 || arrX.length > 2) {
            console.log(arrO, 'hallo');
            if(arrO == [0,1,2] || arrO ==[0,4,8] ||arrO == [2,4,6] ||arrO == [3,4,5] ||arrO == [6,7,8] || arrO ==[0,3,6] 
              || arrO == [1,4,7] ||arrO == [2,5,8]) {
              console.log('congrats O won');
            }
            else if(arrX == [0,1,2] || arrX == [0,4,8] || arrX == [2,4,6] || arrX == [3,4,5] || arrX ==[6,7,8] ||arrX == [0,3,6]
               || arrX == [1,4,7] || arrX == [2,5,8]) {
              console.log('congrats X won');
            }
          }
          console.log(arrO, arrX);
        }
   } } )
  };

  function _setBoardSize(boardSize) {
    _boardSize = boardSize
   }

  function _initializeGame() {
    _createBoard();
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
  
  function waitASec() {
    setTimeout(() => {
      console.log('hold up eh');
    }, 1000);
  }
   
   waitASec(); 
    // game stops when any player creates a line of 3 equal symbols in any direction. 
    // logic should account for a tie/mutual loss as well. Either checkmate or full board as ending criteria? both?
    _count == 3 ? _winner = true : _winner = false;

  // not a reflection of actual gameplay <placeholder>.
  console.log('end of game, count Xs and Os? ');

  function setMark(dis) {
  dis.style.backgroundColor == 'hotpink' ? dis.style.backgroundColor = 'white' : dis.style.backgroundColor ='hotpink';
  dis.textContent == '' ? dis.textContent = _mark : dis.textContent = '';
  _mark == 'x' ? _mark = 'o' : _mark = 'x';
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
  
  _createBoard();
  _displayController();


})();



// const p1 = ticTacToeModule.player('jeanine', 'x');
// p1.getState();
// p1.setState();