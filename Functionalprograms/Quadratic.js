/*************************************************************
 * Execution: defult node   cmd> node Quadratic.js
 * @purpose: find the roots of x.
 * @file:Quadratic.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 25/02/2019
 ************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');

var n1 = rl.question("Enter the value of a :");
var n2 = rl.question("Enter the value of b :");
var n3 = rl.question("Enter the value of c :");

u.quadratic(n1, n2, n3);