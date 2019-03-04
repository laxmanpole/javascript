/********************************************************************************
 * Execution:  defult node   cmd>Stopwatch.js
 * @purpose: Measure the elapsed time between start and end.
 * @overview: Start the Stopwatch and End the Stopwatch,Print the elapsed time.
 * @file:Stopwatch.js 
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 26/02/2019
 ************************************************************************************/

var u = require('./Utility');
var rl = require('readline-sync');

var num = rl.question("Enter the value :");
u.stopwatch(num)