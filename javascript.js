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
            if(arrO.includes('0,1,2') || arrO.includes('0,4,8') ||arrO.includes('2,4,6') ||arrO.includes('3,4,5') 
            ||arrO.includes('6,7,8') || arrO.includes('0,3,6') || arrO.includes('1,4,7') ||arrO.includes('2,5,8')) {
              
              pt.innerText = ' ~ PLAYER O WON!!!! SUPERRAD';
              setTimeout(() => {
                Array.from(config.tiles).forEach(tile => tile.innerText = "" );
                pt.innerText = '';
              }, 3000);
            }
            else if(arrX.includes('0,1,2') || arrX.includes('0,4,8') ||arrX.includes('2,4,6') ||arrX.includes('3,4,5') 
            ||arrX.includes('6,7,8') || arrX.includes('0,3,6') || arrX.includes('1,4,7') ||arrX.includes('2,5,8')) {
              console.log('congrats X won');
              pt.innerText = '~ PLAYER X WON!!!! SUPER AMAZE';
              setTimeout(() => {
                Array.from(config.tiles).forEach(tile => tile.innerText = '');
                pt.innerText = '';
              }, 3000);
            } 
            else if(Array.from(config.tiles).every(tile => tile.innerText != '')){
              pt.innerText = ' ~ NO WINNERZ. TRY AGAIN';
              setTimeout(() => {
                Array.from(config.tiles).forEach(tile => tile.innerText = '');
                pt.innerText = '';
              }, 2000);
             
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