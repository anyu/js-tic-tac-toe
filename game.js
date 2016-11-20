/*********** 

Build a tic-tac-toe game in the browser where two human players can play against each other.

Create a basic 3x3 board object in Javascript that lists the current item in each space on the board (e.g. "X", "O", or " ").
Create a render() function which cycles through that board object and creates the appropriate HTML elements. 
When the user clicks on a blank square, it should show the current player's symbol.
This can be triggered by listening for a click event on the appropriate div. 
It may be helpful to give each div a data attribute or id based on its position so you can identify it in your JS code.
The game logic should then check whether the game is over -- if any player has achieved victory or if there are no more turns available. 

************/

var canvas = document.getElementById("grid");
var context = canvas.getContext("2d");

var SQUARE_SIZE = 150;
var BOARD_SIZE = 450;

var board = [];

var newTurn = false;

for (var i = 0; i < 3;i ++) {
    board[i] = new Array();
    for (var j = 0; j < 3;j++) {
        board[i][j] = 0;
    }
}

function drawBackground(){
    for (var x = 0; x <= BOARD_SIZE; x += SQUARE_SIZE) {
        context.moveTo(x, 0);
        context.lineTo(x, BOARD_SIZE);
    }
    for (var x = 0; x <= BOARD_SIZE; x += SQUARE_SIZE) {
        context.moveTo(0, x);
        context.lineTo(BOARD_SIZE, x);
    }
    context.strokeStyle = "#EEEEEE";
    context.lineWidth = 5;
    context.stroke();

}

document.getElementById('grid').onclick = function() {
    board[0][0] = 1;
    var newTurn = true;
}

function init() {

    var game = function() {
        draw();
    }

    var draw = function() {   
        drawBackground();
     
        for (var i = 0; i < 3;i ++) {
            for (var j = 0; j < 3;j++) {
                if (board[i][j] == 1) {
                    context.fillStyle = "#1d1d1d";
                    context.beginPath();
                    context.arc(100, 100, 50, 0, Math.PI*2, true);
                    context.closePath();
                    context.fill();
                }
            }
        }
    }



    function newGame() {
        gameLoop = setInterval(game, 350);            
    }
    newGame();

}

init();
