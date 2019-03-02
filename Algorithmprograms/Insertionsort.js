/********************************************************************** 
 *  Execution:1. default node         cmd> node Insertionsort.js 
 * @purpose: Reads in array from standard input and prints them in sorted order.
 * @overview:Uses Insertion sort and check entered number is sorted or not.
 * @file:Insertionsort.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 28/02/2019
 ***********************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');

var num = rl.question("Enter the number of elements you want to enter:");
console.log("Enter " + num + " elements: ");
var arr = [];
arr = u.createArray(num);
arr = u.insertionsort(arr);
console.log(arr);