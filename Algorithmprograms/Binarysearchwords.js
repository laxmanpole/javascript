/****************************************************************************
 * Execution :   1. default node         cmd> node Binarysearchwords.js 
 * @purpose: The program reports if the search word is found in the list.
 * @file: Binarysearchwords.js 
 * @auther: Laxman Pole<polelaxman001@gmail.com>
 * @verison: 1.0.0
 * @since: 28/02/2019
 ******************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var file = require('fs');
var f = file.readFileSync('./file.txt', 'utf8');
var arr = f.split(',');
var word = rl.question("Enter the word you want search:");
if (arr.includes(word)) {
    console.log("Is there");
} else {
    console.log("Not");
}