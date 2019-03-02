/***********************************************************************************
 * Execution:  defult node   cmd> node Gambler.js
 * @Aim: Play the gambler & Print Number of Wins and Percentage of Win and Loss.
 * @file:Gambler.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 27/02/2019
 ************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var stake = rl.question("enter deposit::");
var goal = rl.question("enter goal limit: :");
var trial = rl.question("enter number of trials:");

u.gambler(stake, goal, trial)