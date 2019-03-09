/**********************************************************************************************
 * Execution:defult node        cmd>node QueuePrime.js
 * @purpose:Prime Numbers that are Anagram in the Range of 0-1000 in a Queue using
            the Linked List and Print the Anagrams prime number.
 * @file:.QueuePrime.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 08/03/2019
 ***********************************************************************************************/
var u = require('./Utility');
var l = require('./Implementation/QueueusLinklist')
var rl = require('readline-sync');
var q = new l.QueueLinkedlist();
try {
    var primeNumbers = [];
    // stored the prime number in array.
    for (let index = 2; index < 1000; index++) {
        if (u.primenumber(index)) {
            primeNumbers.push(index);
        }

    }
    //check the prime number is anagram or not.
    //enqueue the anagrams prime number in Queue.
    for (let i = 0; i < primeNumbers.length; i++) {
        for (let j = i + 1; j < primeNumbers.length; j++) {
            if (u.isAnagramNum(primeNumbers[i].toString(), primeNumbers[j].toString())) {
                q.enqueue(primeNumbers[i] + " " + primeNumbers[j]);
            }
        }
    }
    //print the anagrams prime nummbr from Queue.
    var size = q.size();
    for (let i = 1; i < size; i++) {
        console.log(q.dequeue());
    }
} catch (err) {
    console.log(err);
}