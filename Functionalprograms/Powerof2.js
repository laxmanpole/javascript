/*********************************************************************************
 * Execution:  defult node   cmd>node Powerof2.js
 * @purpose: prints a table of the powers of 2 that are less than or equal to 2^N.
 * @overview:Take power value number if it is greater than 31 then overflow.
 * @file:Powerof2.js 
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 26/02/2019
 ***********************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');

var n = rl.question("Enter the number:");
u.powerof2(n);