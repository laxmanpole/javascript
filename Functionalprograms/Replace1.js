/****************************************************************** 
 * Execution: defult node   cmd> node Replace1.js
 * @purpose: Replace given string.
 * @overview:Take input as string & replace word from string.
 * @file:Replace1.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 25/02/2019
 *********************************************************************/

var u = require('./Utility');
var rl = require('readline-sync');


var str1 = rl.question("Enter a String:");
var str2 = rl.question("Enter name you want to replace:");
var str3 = rl.question("Enter name you want to replace with:");
u.replace(str1, str2, str3);