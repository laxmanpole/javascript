/***********************************************************
 * Execution: defult node   cmd>node Leapyear.js
 * @purpose: check the given year is leap year or not.
 * @overview:diplay the enterd year is leap year or not.
 * @file:Leapyear.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 26/02/2019
 ************************************************************/


var u = require('./Utility');
var rl = require('readline-sync');


var n = rl.question("Enter the year:");
var result = u.leapYear(n);
if (result == true) {
    console.log("it is leap year");
} else {
    console.log("it is not leap year");
}