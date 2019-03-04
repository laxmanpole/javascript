/********************************************************************
 * Execution: defult node    cmd>node Harmonic.js
 * @purpose: Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
 * @overview:Take input as number print the Harmonic number.
 * @file:Harmonicno.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 26/02/2019
 ************************************************************************/


var u = require('./Utility');
var rl = require('readline-sync');
var n = rl.question("Enter the number:");
var result = u.harmonicNumber(n);
console.log(n + "th Harmonic number is: " + result);