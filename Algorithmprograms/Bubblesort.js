/****************************************************************************** 
 * Execution:1. default node         cmd> node Bubblesort.js 
 * @purpose: Bubble sort for integer.
 * @overview:check entered number is sorted or not.
 * @file: FindNumber.js 
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 28/02/2019
 ********************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var size = rl.question("Enter the size of array:");
var arr = []
for (var i = 0; i < size; i++) {
    arr[i] = rl.question("Enter the element of array:");
}
console.log("Before bubble sort:" + arr);
var length = arr.length;
u.bubblesortInt(arr, length);