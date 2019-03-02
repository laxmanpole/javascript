/****************************************************************  
 *   Execution:  defult node    cmd> node PrimeFactor.js
 * @purpose: Computes the prime factorization of given number.
 * @overview:Take number as input and find prime factorization.
 * @file:PrimeFactor.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 25/02/2019
 *****************************************************************/

var u = require('./Utility');
var rl = require('readline-sync');

var num = rl.question("Enter the number:");
u.primefactor(num);