/*****************************************************************************************
 * Execution: defult node   cmd>node SumOfZero.js
 * @purpose: Read in N integers and counts the number of triples that sum to exactly 0.
 * @file:SumOfZero.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 26/02/2019
 ********************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var MinValue = rl.question("Enter the min range value::");
var MaxValue = rl.question("Enter the max range value: ");
u.sumofzero(MinValue, MaxValue)