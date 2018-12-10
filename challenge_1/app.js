

let count = 0;
let activeGame = true;
let winner;


const resetGame = () => {
    count = 0;
    activeGame = true;
    let DOMElems = document.getElementsByTagName('td')
    for (let i = 0; i< DOMElems.length; i++) {
        DOMElems[i].innerHTML = ' ';
    }
    document.getElementsByTagName('h2')[0].innerHTML = 'NO WINNER YET';
}


const selectCell = (event) => {
    let players = ['X', 'O'];
    if (event.target.innerHTML === ' ' && activeGame) {
        event.target.innerHTML = players[count%2];
        count++;
        checkForWinner()

    }
}


const checkForWinner = () => {
    let DOMElems = document.getElementsByTagName('td')
    let board = [[],[],[]];
    for (let i = 0; i< DOMElems.length; i++) {
        board[Math.floor(i/3)].push(DOMElems[i].innerHTML)
    }
    
    // Check row and col wins in same loop
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && 
                board[0][i] === board[2][i] && 
                board[0][i] !== ' ') {
            winner = board[0][i];
            endGame(winner);
        }

        if (board[i][0] === board[i][1] && 
                board[i][0] === board[i][2] && 
                board[i][0] !== ' ') {
            winner = board[i][0];
            endGame(winner);
        }
    }

    //Check for diagonal wins
    if (board[0][0] === board[1][1] && 
            board[0][0] === board[2][2] && 
            board[0][0] !== ' ') {
        winner = board[0][0];
        endGame(winner);
    }

    if (board[0][2] === board[1][1] && 
            board[0][2] === board[2][0] && 
            board[0][2] !== ' ') {
        winner = board[0][2];
        endGame(winner);
    }

}

const endGame = (winner) => {
    document.getElementsByTagName('h2')[0].innerHTML = winner + ' has won the game!';
    activeGame = false;
}
