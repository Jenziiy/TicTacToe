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
           let arrX = [];
           let arrO = []; 
          console.log(scoresArr.indexOf('x'));
          for (let i = 0 ; i<scoresArr.length; i++) {
            if ( scoresArr[i] === 'x' ) {
              arrX.push(i);
            } else if ( scoresArr[i] === 'o') {
              arrO.push(i);
            }
          }
          if (arrO.length > 2 || arrX.length > 2) {
            let pt = document.getElementById('player-turn');
            arrO = arrO.sort().toString();
            arrX = arrX.sort().toString();
            if(arrO.includes('0,1,2') || arrO.includes('0,4,8') ||arrO.includes('2,4,6') ||arrO.includes('3,4,5') 
            ||arrO.includes('6,7,8') || arrO.includes('0,3,6') || arrO.includes('1,4,7') ||arrO.includes('2,5,8')) {
              
              pt.innerText = 'PLAYER O WON!!!! SUPERRAD';
              setTimeout(() => {
                Array.from(tiles).forEach(tile => tile.innerText = "" );
              }, 3000);
            }
            else if(arrX.includes('0,1,2') || arrX.includes('0,4,8') ||arrX.includes('2,4,6') ||arrX.includes('3,4,5') 
            ||arrX.includes('6,7,8') || arrX.includes('0,3,6') || arrX.includes('1,4,7') ||arrX.includes('2,5,8')) {
              console.log('congrats X won');
              pt.innerText = 'PLAYER X WON!!!! SUPER AMAZE';
              setTimeout(() => {
                Array.from(tiles).forEach(tile => tile.innerText = '');
              }, 3000);
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

  function setMark(dis) {
  dis.textContent == '' ? dis.textContent = _mark : dis.textContent = '';
  _mark == 'x' ? _mark = 'o' : _mark = 'x';
  }
  
  _createBoard();
  _displayController();

})();