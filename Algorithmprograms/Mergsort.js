/******************************************************************************* *
 *Execution:1. default node         cmd> node Mergsort.js
 * @purpose: Reads in array from standard input and prints them in sorted order.
 *@overview:Uses mergesort,check whether it is sorted or not.
 *@file:Mergsort.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 28/02/2019
 *********************************************************************************/

var u = require('./Utility');
var rl = require('readline-sync');
var num = rl.question("Enter the number of elements you want to enter:");
console.log("Enter " + num + " elements: ");
var arr = [];
arr = u.createArray(num);
arr = u.mergesort(arr);
console.log(arr);