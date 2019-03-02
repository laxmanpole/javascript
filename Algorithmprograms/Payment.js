/********************************************************************************************
 *Execution:1. default node         cmd> node Payment.js 
 *@purpose: calculate monthly Payment that reads in three command­line arguments P, Y, and R
 *@file:Payment.js
 *@auther: Laxman Pole
 *@verison: 1.0.0
 *@since: 29/02/2019
 *********************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var p, y, r;
p = rl.question("Enter principle loan amount:");
y = rl.question("Enter Year :");
r = rl.question("Enter percent intercent:");
u.monthlyPayment(p, y, r);