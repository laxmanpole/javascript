/********************************************************************************
 * Execution:  defult node    cmd> node Windchill.js
 * @purpose: Takes two input temperature and speed and prints the wind chill. 
 * @file:Windchill.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 26/02/2019
 *******************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');

var t = rl.question("Enter a Temperature:");
var v = rl.question("Enter a Speed:");
u.windchill(t, v)