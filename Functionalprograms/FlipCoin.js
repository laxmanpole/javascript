/*************************************************************** 
 *  Execution:    defult node   cmd> node FlipCoin.js
 * @purpose: Flip Coin and print percentage of Heads and Tails.
 * @file:FlipCoin.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 26/02/2019
 ***************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var n = rl.question("Enter the no.of times you want to flip the coin:");
u.coinFlip(n);