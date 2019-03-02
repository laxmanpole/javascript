/***********************************************************************************************************
 *Execution: defult node  cmd>node Tempconv.js
 * @purpose: Take a temperature in fahrenheit as input outputs the temperature in Celsius or viceversa.
 * @overview:check temperature convert from fahrenheit to celcius & celcius to fahrenheit.
 * @file:Tempconv.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 29/02/2019
 ***********************************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var num = rl.question("Enter a Temperature:");
var i = rl.question("Enter number 1. for temperature in fahrenheit & 2 for celcius:");
u.temperature(num, i);