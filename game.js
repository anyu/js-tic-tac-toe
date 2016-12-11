var board = [];
var gameOver = false;
var currentPlayer = 1;
var winner;

function init() {

    // fill board array with 0's
    for (var row = 0; row < 3; row++) {
        board[row] = [];
        for (var col = 0; col < 3; col++) {
            board[row][col] = 0;
        }
    }

    gameLoop = setInterval(startGame, 350);    

    function startGame() {
        detectPlayerActivity();
        checkRows();
        checkCols();
        checkDiagonals();
        checkCatsGame();
    }

    function detectPlayerActivity() {
        var cell_number = 1;
        while (cell_number < 10) {
            for (var row = 0; row < 3; row++) {
                for (var col = 0; col < 3; col++) {
                    detectClicks(row, col, cell_number);
                    cell_number++;
                }
            }
        }
    }

    function detectClicks(row, col, cell_number) {
        document.getElementById('square' + cell_number).onclick = function() {
            if (cellIsFree(row, col) && !gameOver) {
                drawSymbol(row, col, cell_number);
            }
        }
    }

    function cellIsFree(row, col) {
        return board[row][col] != 0 ? false : true
    }

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

    // check if three in a row
    function checkRows() { 
        var rowSum = 0;
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 3; col++) {
                rowSum += board[row][col];
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
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 3; col++) {
                colSum += board[col][row];
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
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 3; col++) {
                if (board[row][col] != 0) {
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

    function endGame() {
        declareResult();
        gameOver = true;
        clearInterval(gameLoop);
    };

    function declareResult() {
        var displayMsg = document.getElementById('resultMsg');

        switch (winner) {
            case 0:
                result = document.createTextNode("Cat's game!");
                break;
            case 1:
                result = document.createTextNode("Player X is the winner!");
                break;
            case 2:
                result = document.createTextNode("Player O is the winner!");
                break;
        }   
   
        displayMsg.appendChild(result);
    }

    // New game
    document.getElementById('restart').onclick = function() {
       location.reload();
    }
}

init();


