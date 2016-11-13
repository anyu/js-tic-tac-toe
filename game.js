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


var gameBoard = function() {
    this.item = item;
}

function init() {

    var game = function() {
        draw();
    }

    var draw = function() {        
       
    }    



    function endGame() {
        clearInterval(gameLoop);
    };

    function newGame() {
        gameLoop = setInterval(game, 350);            
    }

    newGame();
}

init();
