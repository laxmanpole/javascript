/*********************************************************************
 *Execution: Defult node  cmd> node sqrt.js 
 * @purpose: to compute the square root of a nonnegative number.
 * @file:sqrt.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 01/03/2019
 **********************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var c = rl.question("Enter a non-negative number:");
var epsilon = 1.0e-15;
var t = c;
u.sqrt(t, epsilon, c);