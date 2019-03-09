/********************************************************************************************  
 * Execution :   1. default node         cmd> node PrimeChecker.js 
 * @Purpose: read the given input check is prime number or not
 *  @file: PrimeNumber.js
 *  @overview : PrimeNumber module to check if number is prime or not.
 *  @module : PrimeNumber - This is optional if expeclictly its an npm or local package
 *  @author : Laxman Pole <polelaxman001@.com>
 *  @version : 1.0
 *  @since : 27/02/2019
 ********************************************************************************************/

var u = require('./Utility');
var rl = require('readline-sync');
var num = rl.question("Enter the no:");

function primenum(num) {
    var k = 0;
    var prime = [];
    for (let i = 2; i <= num; i++) {
        var res = u.primenumber(i);
        if (res) {
            console.log(i);

        }
    }
}
primenum(num);