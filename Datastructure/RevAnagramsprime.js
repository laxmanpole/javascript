/**********************************************************************************************
 * Execution:defult node        cmd>node StackPrime.js
 * @purpose:Prime Numbers that are Anagram in the Range of 0-1000 in a Stack using
            the Linked List and Print the Anagrams in the Reverse Order.
 * @file:StackPrime.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 07/03/2019
 ***********************************************************************************************/
var u = require('./Utility');
var l = require('./Implementation/StackusLinklist')
var rl = require('readline-sync');
var stk = new l.StackLinkedList();
try {
    var primeNumbers = [];
    // stored the prime number in array.
    for (let index = 2; index < 1000; index++) {
        if (u.primenumber(index)) {
            primeNumbers.push(index);
        }

    }
    //check the prime number is anagram or not.
    //push the anagram prime number in stack.
    for (let i = 0; i < primeNumbers.length; i++) {
        for (let j = i + 1; j < primeNumbers.length; j++) {
            if (u.isAnagramNum(primeNumbers[i].toString(), primeNumbers[j].toString())) {
                stk.push(primeNumbers[i] + " " + primeNumbers[j]);
            }
        }
    }
    //print the number in reverse order from stack.
    var size = stk.getSize();
    for (let i = 1; i <= size; i++) {
        console.log(stk.pop());
    }
} catch (err) {
    console.log(err);
}