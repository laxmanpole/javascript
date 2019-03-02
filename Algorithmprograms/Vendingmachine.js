/***********************************************************************
 * Execution:  defult node      cmd>node Vendingmachine.js
 * @purpose: Find the Fewest Notes to be returned from Vending Machine.
 * @file:Vendingmachine.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 28/02/2019
 ************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');

function vendmachine() {
    var amount = rl.question("enter amount: ");
    u.vendingMachine(amount, 0, 0);
}
vendmachine();