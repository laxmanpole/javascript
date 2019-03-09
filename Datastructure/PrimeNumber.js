/**********************************************************************************************
 * Execution:defult node        cmd>node PrimeNumber.js
 * @purpose:find the Prime numbers in that range. Store the prime numbers in a 2D Array.
 * @overview:Take input as range between 0-1000 and print the prime number in between range.
 * @file:PrimeNumber.js
 * @author: Laxman Pole
 * @verison: 1.0.0
 * @since: 06/03/2019
 ***********************************************************************************************/
var u = require('./Utility');
var req = require('util');
var rl = require('readline-sync');
var array = [
    ["0-100 "],
    ["100-200 "],
    ["200-300 "],
    ["300-400 "],
    ["400-500 "],
    ["500-600 "],
    ["600-700 "],
    ["700-800 "],
    ["800-900 "],
    ["900-1000 "]
];
var i = 0;
var j = 1;
var range = 100;
for (let prime = 2; prime <= 1000; prime++) {
    if (u.primenumber(prime)) {
        if (prime < range) {
            array[i][j] = prime;
            j++;
        } else {
            j = 1;
            range = range + 100;
            i++;
            array[i][j] = prime;
        }
    }
}
console.log("The prime numbers are presents in the given range ");
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        req.print(array[i][j] + " ");
    }
    //utility.mark1(array)
    console.log();
}
console.log();