/**********************************************************************
 * Execution :   1. default node         cmd> node FindNumber.js 
 * @purpose: Find the number between start and end(mid) 
 * @overview:Print the intermediary number and the final answer
 * @file:FindNumber.js 
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 28/02/2019
 ***************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var low = rl.questionInt("Enter starting number : ");
var high = rl.questionInt("Enter last number : ");
var n = u.findNumber(low, high);
console.log("Your number is : " + n);