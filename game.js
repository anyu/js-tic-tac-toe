var board = [];
var gameOver = false;
var currentPlayer = 1;
var winner;

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

    // detect cell clicked

    function detectClicks(row, col, cell_number) {
        document.getElementById('square' + cell_number).onclick = function() {
            if (cellIsFree(row, col) && !gameOver) {
                drawSymbol(row,col, cell_number);
            }
        }
    }

    detectClicks(0,0,1);
    detectClicks(0,1,2);
    detectClicks(0,2,3);

    detectClicks(1,0,4);
    detectClicks(1,1,5);
    detectClicks(1,2,6);

    detectClicks(2,0,7);
    detectClicks(2,1,8);
    detectClicks(2,2,9);

    document.getElementById('restart').onclick = function() {
       location.reload();
    }
}

init();


