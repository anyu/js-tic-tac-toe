var board = [];

var currentPlayer = 0;

function init() {

    for (var i = 0; i < 3;i ++) {
        board[i] = [];
        for (var j = 0; j < 3;j++) {
            board[i][j] = 0;
        }
    }

    function drawSymbol(row,col, num) {
        var mark = "";
        if (currentPlayer == 1) {
            board[row][col] = 1;
            var square = document.getElementById('square' + num);
            
            var t = document.createElement('div');
            t.innerHTML = 'X';
            square.appendChild(t);
        }
        else {
            board[row][col] = 2;
            var square = document.getElementById('square' + num);

            var t = document.createElement('div');
            t.innerHTML = 'O';
            square.appendChild(t);
        }
        // draw mark on board
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


}

init();


