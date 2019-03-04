/**********************************************************************************************
 * Execution:defult node        cmd>node Tobinary2.js
 * @purpose:Take input as decimal number and convert into binary form ,swap nibbles from binary.
 * @overview:check it is swap or not and resultant binary convert into decimal.
 * @file:Tobinary2.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 01/03/2019
 ***********************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var num = rl.question("Enter a number:");
u.tobinary2(num);