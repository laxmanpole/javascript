var u = require('./Utility');
var rl = require('readline-sync');

/*
 * @Aim: Check given input string is anagram or not
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 27/02/2019
 */
var str1 = rl.question("Enter first string :");
var str2 = rl.question("Enter first string :");
var status = u.isAnagram(str1, str2);
if (status == true) {
    console.log(str1 + " and " + str2 + " are anagrams");
} else {
    console.log(str1 + " and " + str2 + " are not anagrams");
}