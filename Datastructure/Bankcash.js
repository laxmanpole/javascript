/**********************************************************************************************
 * Execution:defult node        cmd>node Bankcash.js
 * @purpose:Create a Program which creates Banking Cash Counter where people come in to deposit 
 *          Cash and withdraw Cash.
 * @overview:Write a Queue Class to enqueue and dequeue people to either deposit or withdraw money 
 *           and maintain the cash balance
 * @file: Bankcash.js
 * @author: Laxman Pole
 * @verison: 1.0.0
 * @since: 05/03/2019
 ***********************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var l = require('./Implementation/Queue')
var queue = new l.Queue();
try {
    var num = rl.question("Entr no of people:");
    if (isNaN(num)) throw "It is not number,pls enter valid number";
    for (let i = 0; i < num; i++) {
        var name = rl.question("Enter people name:");
        queue.enqueue(name);
    }

    var Totalbalance = parseInt(10000);

    for (let i = 0; i < num; i++) {
        console.log("Welcome:)" + queue.dequeue());

        var choice = rl.questionInt("Enter 1. for deposit & 2.for withdraw:");
        switch (choice) {
            case 1:
                var deposit = rl.questionInt("Enter a Deposit amount:");
                Totalbalance += deposit;
                console.log("Your amount deposit successfully ,& your amount is" + Totalbalance);
                break;
            case 2:
                var withdraw = rl.questionInt("Enter a withdraw amount:");
                if (withdraw > Totalbalance) {
                    console.log("Insufficient balance,Enter new amount:");
                } else {
                    Totalbalance -= withdraw;
                    console.log("Your amount deposit successfully ,& your amount is:" + Totalbalance);
                }
                break;

        }
    }
} catch (err) {
    console.log(err);
}