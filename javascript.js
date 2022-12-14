const ticTacToeModule = (function () {
  'use strict'

 let config = (function config() {
    let _count = 0;
    let _boardSize = 3;
    let _mark = 'x';
    let tiles = document.getElementsByClassName('tile');

    return { _count, _boardSize, _mark, tiles }
  })();
  
  function _gameController() {
    // add eventlistener for any tile.
    const isSubset = (array1, array2) =>
    array2.every((element) => array1.includes(element));

    document.body.addEventListener('click', (e) => { if ( e.target.classList == 'tile' ) {
      setMark(e.target);
      config._count++;

      if (config._count > 3){
        let scoresArr = Array.from(config.tiles).map(tile=>tile.textContent);
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
            if      ( isSubset(arrO, ['0','1','2']) || isSubset(arrO, ['0','4','8']) ||
                      isSubset(arrO, ['0','3','6']) || isSubset(arrO, ['1','4','7']) ||
                      isSubset(arrO, ['2','4','6']) || isSubset(arrO, ['2','5','8']) ||
                      isSubset(arrO, ['3','4','5']) || isSubset(arrO, ['6','7','8']) ) {

              pt.innerText = ' ~ PLAYER O WON!!!! SUPERRAD';
              setTimeout(() => {
                Array.from(config.tiles).forEach(tile => tile.innerText = "" );
                pt.innerText = '';
              }, 2500);
            }
            else if( isSubset(arrX, ['0','1','2']) || isSubset(arrX, ['0','4','8']) ||
                     isSubset(arrX, ['0','3','6']) || isSubset(arrX, ['1','4','7']) ||
                     isSubset(arrX, ['2','4','6']) || isSubset(arrX, ['2','5','8']) ||
                     isSubset(arrX, ['3','4','5']) || isSubset(arrX, ['6','7','8']) ) {
              console.log('congrats X won');
              pt.innerText = '~ PLAYER X WON!!!! SUPER AMAZE';
              setTimeout(() => {
                Array.from(config.tiles).forEach(tile => tile.innerText = '');
                pt.innerText = '';
              }, 2500);
            } 
            else if(Array.from(config.tiles).every(tile => tile.innerText != '')){
              pt.innerText = ' ~ NO WINNERZ. TRY AGAIN';
              setTimeout(() => {
                Array.from(config.tiles).forEach(tile => tile.innerText = '');
                pt.innerText = '';
              }, 2500);
             
          } 
          }
        }
   } } )
  };

  function _initializeGame() {
    _createBoard();
    _gameController();
  };

  function _createBoard() {
    const board = document.querySelector('.board');

    for(let rowIndex = 0; rowIndex < config._boardSize; rowIndex++) {
      const row = document.createElement('div');
      row.classList.add('row');

      for (let columnIndex = 0; columnIndex <config. _boardSize; columnIndex++) {
        const column = document.createElement('div');
        column.classList.add('tile');

        row.appendChild(column);
      }
      board.appendChild(row);
    }
  }

  function setMark(dis) {
  dis.textContent == '' ? dis.textContent = config._mark : dis.textContent = dis.textContent;
  config._mark == 'x' ? config._mark = 'o' : config._mark = 'x';
  }
  
_initializeGame();

})();