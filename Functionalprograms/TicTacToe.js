/***************************************************************************
 *Execution: defult node   cmd>node TicTacToe.js
 * @purpose:  Program to play a Cross Game or Tic-Tac-Toe Game. 
 * @overview:   Player 1 is the Computer and the Player 2 is the user.
				Player 1 take Random Cell that is the Column and Row.
 * @file:TicTacToe.js				
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 29/02/2019
 *****************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');

function ticTacToe() {
    var flag = false;
    var arr = u.intializeGame();
    console.log("Player 1 : Computer, Symbole : O");
    console.log("Player 2 : You, Symbole : x");
    console.log("Winning isn't everything, but wanting to win is...");
    var count = 1;
    while (count <= 9) {
        arr = u.computerPlayer(arr);
        count++;
        while (count > 4) {
            flag = u.check(arr);
            break;
        }
        if (flag) {
            console.log("Computer is the winner. Better luck next time");
            break;
        } else if (count == 8) {
            console.log("Draw match.. Try next!");
            break;
        }
        arr = u.userPlayer(arr);
        while (count > 4) {
            flag = u.check(arr);
            break;

        }
        if (flag) {
            console.log("Gosh!.. I knew it. You are the winner");
            break;
        }
        count++;
    }
    console.log("Game end");
}
ticTacToe();