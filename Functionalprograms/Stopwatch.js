var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Measure the elapsed time between start and end.
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 26/02/2019
 */
var num = rl.question("Enter the value :");
u.stopwatch(num)