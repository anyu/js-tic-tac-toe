var board = [];
var currentPlayer = 1;
var winner;
var gameOver = false;
var testCount = 0;

function init() {

    // fill board array with 0's
    for (var i = 0; i < 3; i ++) {
        board[i] = [];
        for (var j = 0; j < 3; j++) {
            board[i][j] = 0;
        }
    }

    gameLoop = setInterval(startGame, 350);    

    function startGame() {
        checkRows();
        checkCols();
        checkDiagonals();
        checkCatsGame();
    }

    function endGame() {
        declareResult();
        gameOver = true;
        clearInterval(gameLoop);
    };

    function drawSymbol(row, col, cell_number) {
        var cell = document.getElementById('square' + cell_number);
        var mark = document.createElement('div');

        if (currentPlayer == 1) {
            board[row][col] = 1;
            mark.className = "symbol x";
            mark.innerHTML = 'X';
        }
        else {
            board[row][col] = 4;
            mark.className = "symbol o";
            mark.innerHTML = 'O';
        }
        cell.appendChild(mark);
        switchPlayer();
    }

    // alternate between X's and O's
    function switchPlayer() {
        currentPlayer = Math.abs(currentPlayer - 1);
    }

    function cellIsFree(row, col) {
        return board[row][col] != 0 ? false : true
    }

    // check if three in a row
    function checkRows() { 
        var rowSum = 0;
        for (var i = 0; i < 3; i ++) {
            for (var j = 0; j < 3; j++) {
                rowSum += board[i][j];
            }
            if (rowSum == 3) {
                winner = 1;
                endGame();
            }

            if (rowSum == 12) {
                winner = 2;
                endGame();
            }
            rowSum = 0;
        } 
    }

    // check if three in a column
    function checkCols() {
        var colSum = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                colSum += board[j][i];
            }
            if (colSum == 3) {
                winner = 1;
                endGame();
            }

            if (colSum == 12) {
                winner = 2;
                endGame();
            }
            colSum = 0;
        } 
    }

    // check if three diagonally
    function checkDiagonals() {
        var leftDiagSum = board[0][0] + board[1][1] + board[2][2];
        var rightDiagSum = board[0][2] + board[1][1] + board[2][0];

        if (leftDiagSum == 3 | rightDiagSum == 3) {
            winner = 1;
            endGame();
        }

        if (leftDiagSum == 12 | rightDiagSum == 12) {
            winner = 2;
            endGame();
        }
    }

    // check if no more turns and it's a draw
    function checkCatsGame() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] != 0) {
                   continue;
                }
                else return false;
            }
        }
        if(winner != 1 && winner != 2) {
            winner = 0;
            endGame();
        }
    }

    function declareResult() {
        var displayMsg = document.getElementById('resultMsg');

        if (winner == 0) {
            msg = document.createTextNode("Cat's game!");
        }
        else if (winner == 1) {
            msg = document.createTextNode("Player X is the winner!");
        }
        else if (winner == 2) {
            msg = document.createTextNode("Player O is the winner!");
        }       
        displayMsg.appendChild(msg);

    }

    // must be a more elegant way to do this...
    document.getElementById('square1').onclick = function() {
        if (cellIsFree(0,0) && !gameOver) {
            drawSymbol(0,0,1);
        }
    }

    document.getElementById('square2').onclick = function() {
        if (cellIsFree(0,1) && !gameOver) {
            drawSymbol(0,1,2);
        }
    }

    document.getElementById('square3').onclick = function() {
        if (cellIsFree(0,2) && !gameOver) {
            drawSymbol(0,2,3);
        }
    }

    document.getElementById('square4').onclick = function() {
        if (cellIsFree(1,0) && !gameOver) {
            drawSymbol(1,0,4);
        }
    }

    document.getElementById('square5').onclick = function() {
        if (cellIsFree(1,1) && !gameOver) {
            drawSymbol(1,1,5);
        }
    }

    document.getElementById('square6').onclick = function() {
        if (cellIsFree(1,2) && !gameOver) {
            drawSymbol(1,2,6);
        }
    }

    document.getElementById('square7').onclick = function() {
        if (cellIsFree(2,0) && !gameOver) {
            drawSymbol(2,0,7);
        }
    }

    document.getElementById('square8').onclick = function() {
        if (cellIsFree(2,1) && !gameOver) {
            drawSymbol(2,1,8);
        }
    }

    document.getElementById('square9').onclick = function() {
        if (cellIsFree(2,2) && !gameOver) {
            drawSymbol(2,2,9);
        }
    }

    document.getElementById('restart').onclick = function() {
       location.reload();
    }
}

init();


