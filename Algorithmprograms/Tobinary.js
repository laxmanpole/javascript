/***********************************************************************************************
 * Execution: defult node         cmd>node Tobinary.js 
 * @purpose:outputs the binary (base 2) representation of the decimal number typed as the input.
 * @overview:It is based on decomposing the number into a sum of powers of 2.
 * @file:Tobinary.js 
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 01/03/2019
 ************************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var num = rl.question("Enter a number:");
u.tobinary(num);