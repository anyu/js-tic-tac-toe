var board = [];

var currentPlayer = 1;

function init() {

    for (var i = 0; i < 3;i ++) {
        board[i] = [];
        for (var j = 0; j < 3;j++) {
            board[i][j] = 0;
        }
    }

    function drawSymbol(row,col, cell_number) {
        var cell = document.getElementById('square' + cell_number);
        var mark = document.createElement('div');

        if (currentPlayer == 1) {
            board[row][col] = 1;
            mark.className = "symbol x";
            mark.innerHTML = 'X';
        }
        else {
            board[row][col] = 2;
            mark.className = "symbol o";
            mark.innerHTML = 'O';
        }
        cell.appendChild(mark);
        switchPlayer();
    }

    function switchPlayer() {
        currentPlayer = Math.abs(currentPlayer - 1);
    }

    function isFree(row, col) {
        if (board[row][col] != 0) {
            return false;
        }
        else return true;
    }

    function checkRows() {


    }

    function checkCols() {

        
    }

    function checkDiagonals() {

        
    }

    document.getElementById('square1').onclick = function() {
        if (isFree(0,0)) {
            drawSymbol(0,0,1);
        }
    }

    document.getElementById('square2').onclick = function() {
        if (isFree(0,1)) {
            drawSymbol(0,1,2);
        }
    }

    document.getElementById('square3').onclick = function() {
        if (isFree(0,2)) {
            drawSymbol(0,2,3);
        }
    }

    document.getElementById('square4').onclick = function() {
        if (isFree(1,0)) {
            drawSymbol(1,0,4);
        }
    }

        document.getElementById('square5').onclick = function() {
        if (isFree(1,1)) {
            drawSymbol(1,1,5);
        }
    }

    document.getElementById('square6').onclick = function() {
        if (isFree(1,2)) {
            drawSymbol(1,2,6);
        }
    }

    document.getElementById('square7').onclick = function() {
        if (isFree(2,0)) {
            drawSymbol(2,0,7);
        }
    }

    document.getElementById('square8').onclick = function() {
        if (isFree(2,1)) {
            drawSymbol(2,1,8);
        }
    }

    document.getElementById('square9').onclick = function() {
        if (isFree(2,2)) {
            drawSymbol(2,2,9);
        }
    }
}

init();


