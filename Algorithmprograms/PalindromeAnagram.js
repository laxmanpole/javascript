/********************************************************************************************  
 * Execution :   1. default node         cmd> node PalindromAnagram.js 
 * @Purpose: find prime number and check whether its an palindrome and anagram
 *  @file: PalindromeAnagram.js
 *  @overview : 
 *  @module : PalindromeAnagram - This is optional if expeclictly its an npm or local package
 *  @author : Laxman Pole <polelaxman001@.com>
 *  @version : 1.0
 *  @since : 27/02/2019
 ********************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');

function palindrome() {
    console.log("program start..");
    u.isAnagramPalimdrome();
}
palindrome();