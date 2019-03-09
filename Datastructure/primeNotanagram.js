/**********************************************************************************************
 * Execution:defult node        cmd>node PrimeNotanagram.js
 * @purpose:Check the given prime number is anagram or not and print only the not anagram prime number.
 * @overview:Take input as range between 0-1000 and print the prime not anagram number in between range.
 * @file:PrimeNotanagram.js
 * @author: Laxman Pole
 * @verison: 1.0.0
 * @since: 06/03/2019
 ***********************************************************************************************/

var u = require('./Utility');
var req = require('util')
var rl = require('readline-sync');
try {
    var arrAP = [
        []
    ];

    var p = 0;
    var range = 100;
    var arrayPrime = [];
    for (let index = 2; index < 1000; index++) {
        if (u.primenumber(index)) {
            arrayPrime.push(index);
        }

    }
    //	prints prime numbers that are anagrams
    for (let i = 0; i < arrayPrime.length; i++) {
        for (let j = i + 1; j < arrayPrime.length; j++) {

            if (u.isAnagramNum(arrayPrime[i].toString(), arrayPrime[j].toString())) {
                if (arrayPrime[i] <= range) {
                    if (arrayPrime[j] <= range) {
                        arrAP[p].push(arrayPrime[i]);
                        arrAP[p].push(arrayPrime[j]);
                    }
                } else {
                    p++;
                    range = range + 100;
                    arrAP[p] = [];
                    if (arrayPrime[j] <= range) {
                        arrAP[p].push(arrayPrime[i]);
                        arrAP[p].push(arrayPrime[j]);
                    }
                }
            }
        }
    }
    console.log("Anagram prime numbers are: ");
    for (let i = 0; i < 10; i++) {

        console.log(arrAP[i]);
    }
} catch (error) {
    console.log(error)
}



try {
    var array = [
        ["0-100 "],
        ["100-200  "],
        ["200-300 "],
        ["300-400 "],
        ["400-500 "],
        ["500-600 "],
        ["600-700 "],
        ["700-800 "],
        ["800-900 "],
        ["900-1000 "]
    ];
    var array1 = [
        ["0-100 "],
        ["100-200  "],
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
    var arr = []
    var arr1 = []
    var arr2 = []
    for (let prime = 2; prime <= 1000; prime++) {
        if (u.primenumber(prime)) {

            if (prime <= range) {
                var a = "" + prime
                var b = a.split("")
                b.sort()
                var v = ""
                for (let i = 0; i < b.length; i++) {
                    v = v + b[i]
                }
                if (!arr.includes(v)) {
                    arr.push(v)
                    array[i][j] = prime;
                    j++;
                }




            } else {
                var a1 = "" + prime
                var b1 = a1.split("")
                b1.sort()
                var v1 = ""
                for (let i = 0; i < b1.length; i++) {
                    v1 = v1 + b[i]
                }
                if (!arr1.includes(v1)) {
                    arr1.push(v1)
                    j = 1;
                    range = range + 100;
                    i++;
                    array[i][j] = prime;
                }


            }
        }
    }
    console.log("The prime numbers that are not Anagram presents in the given range: ");
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            req.print(array[i][j] + " ");
        }
        //utility.mark1(array)
        console.log();
    }
    console.log(arr2 + " ");
} catch (error) {
    console.log(error);
}