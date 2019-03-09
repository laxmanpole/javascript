/************************************************************************************************
 ******************************BINARY SEARCH IMPLEMENTATION*************************************
 ************************************************************************************************/

var rl = require('readline-sync');
module.exports = {

    binarySearchTree() {
        try {
            var number = rl.question("Enter the number of cases : ");
            // In case the user input is not a number It throws an exception to the catch block

            if (isNaN(number)) throw "PLEASE ENTER AN INTEGER VALUE";
            var arr = [];

            console.log("Enter your integer value");
            for (var i = 0; i < number; i++) {
                arr[i] = rl.question('');

                //In case the user input is not a number It thow exception to catch block

                if (isNaN(arr[i])) throw "PLEASE ENTER A VALID NUMBER "
            }
            for (var j = 0; j < arr.length; j++) {
                var first = (this.factorial(2 * Number(arr[j])));
                var second = Number((this.factorial(Number(arr[j]) + 1)) * (this.factorial(Number(arr[j]))));
                var result = Math.floor((first / second));
                console.log("Node possible way of " + arr[j] + " is " + result);
            }
        } catch (err) {
            console.log("ERROR :" + err);
        }
    },
    factorial(num) {
        var fact = 1;
        for (let index = 1; index <= num; index++) {
            fact = fact * index;
        }
        return fact;
    }
}