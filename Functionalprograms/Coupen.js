/*******************************************************
 * Execution: defult node     cmd>node Coupen.js
 * @purpose:Find Number of Distinct Coupon Number.
 * @file:Coupen.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 28/02/2019
 *********************************************************/

var u = require('./Utility');
var rl = require('readline-sync');
var number = rl.question('please entered the N value : ');
u.generatecoupon(number)