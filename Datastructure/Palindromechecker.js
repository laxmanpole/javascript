/**********************************************************************************************
 * Execution:defult node        cmd>node Palindromechecker.js
 * @purpose:To check given string is palindrome or not.
 * @overview:Take input as string ,read that and stored into deque and check it is palindrome or not.
 * @file:Palindromechecker.js
 * @author: Laxman Pole
 * @verison: 1.0.0
 * @since: 05/03/2019
 ***********************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var l = require('./Implementation/Deque')
    //var deque = new l.Deque();

function palindromeChecker() {
    var deque = new l.Deque;

    try {
        var word = rl.question(" enter the string :");
        if (!isNaN(word)) throw "enter a valid word";

        var arr = word.split("");
        for (let i = 0; i < arr.length; i++) {
            deque.addFront(arr[i]);
        }
        var str1 = "",
            str2 = "";
        for (let i = 0; i < arr.length; i++) {
            str1 += " " + deque.removeFront();
        }

        for (let i = 0; i < arr.length; i++) {
            deque.addFront(arr[i]);
        }

        for (let i = 0; i < arr.length; i++) {
            str2 += " " + deque.removeRear();
        }

        if (str1 === str2) {
            console.log(word + " is a Palindrome ");
        } else {
            console.log(word + " is not a palindrome ");
        }

    } catch (err) {
        console.log(err.message);
    }
}
/**
 * function calls.
 */
palindromeChecker()