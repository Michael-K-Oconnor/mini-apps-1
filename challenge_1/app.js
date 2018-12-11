

// //////////////////////////////////////////
// //////////     MODEL     /////////////////
// //////////////////////////////////////////

const model = {
  count: 0,
  activeGame: true,
  players: ['X', '0'],
  winner: null,
  prevWinner: null,
  board: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
};

const myHeaders = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/JSON',
  'access-control-allow-headers': 'content-type, accept',
});

console.log(myHeaders);

// //////////////////////////////////////////
// //////////     CONTROLLER     ////////////
// //////////////////////////////////////////

const controller = {

  resetGame: () => {
    fetch('http://localhost:3000/', {
      headers: myHeaders,
    });

    if (model.winner) {
      model.prevWinner = model.winner;
    }
    model.count = 0;
    model.winner = null;
    model.activeGame = true;
    model.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    view.drawBoard();
    view.updateApp();
  },


  selectCell: (event) => {
    if (event.srcElement.innerHTML === ' ' && model.activeGame) {
      controller.updateBoard(event.srcElement);
      controller.checkForWinner();
    }
  },

  updateBoard: (DOMElem) => {
    const currentPlayer = model.players[model.count % 2];
    const cell = DOMElem.id;
    const row = Math.floor(cell / 3);
    const col = cell % 3;
    model.board[row][col] = currentPlayer;
    model.count += 1;
    view.drawBoard();
  },

  checkForWinner: () => {
    // Check row and col wins in same loop
    for (let i = 0; i < 3; i += 1) {
      if (model.board[0][i] === model.board[1][i]
                    && model.board[0][i] === model.board[2][i]
                    && model.board[0][i] !== ' ') {
        model.winner = model.board[0][i];
      }

      if (model.board[i][0] === model.board[i][1]
                    && model.board[i][0] === model.board[i][2]
                    && model.board[i][0] !== ' ') {
        model.winner = model.board[i][0];
      }
    }

    // Check for diagonal wins
    if (model.board[0][0] === model.board[1][1]
                && model.board[0][0] === model.board[2][2]
                && model.board[0][0] !== ' ') {
      model.winner = model.board[0][0];
    }

    if (model.board[0][2] === model.board[1][1]
                && model.board[0][2] === model.board[2][0]
                && model.board[0][2] !== ' ') {
      model.winner = model.board[0][2];
    }

    if (model.winner) {
      model.activeGame = false;
      view.updateApp();
    }
  },
};

// //////////////////////////////////////////
// //////////     VIEW     //////////////////
// //////////////////////////////////////////

const view = {

  updateApp: () => {
    if (model.winner) {
      document.getElementsByTagName('h2')[0].innerHTML = `${model.winner} has won the game!`;
    } else {
      document.getElementsByTagName('h2')[0].innerHTML = 'NO WINNER YET';
    }

    if (model.prevWinner) {
      document.getElementsByTagName('h3')[0].innerHTML = `Previous winner was: ${model.prevWinner}`;
    } else {
      document.getElementsByTagName('h3')[0].innerHTML = 'NO PREVIOUS WINNER';
    }
  },

  drawBoard: () => {
    for (let row = 0; row < model.board.length; row += 1) {
      for (let col = 0; col < model.board[0].length; col += 1) {
        const boardId = (row * 3) + col;
        document.getElementById(boardId).innerHTML = model.board[row][col];
      }
    }
  },
};
