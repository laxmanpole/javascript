/*********************************************************************
 * Execution: defult node  cmd>node Stringpermutation.js
 * @purpose:take input as string & print the permutation of string.
 * @file:Stringpermutation.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 28/02/2019
 **********************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var currentIndex = 0;
var str1 = rl.question("Enter a String:");
var permutation = u.permutation(str1);
console.log("Total permutation: " + permutation.length);
console.log(permutation);