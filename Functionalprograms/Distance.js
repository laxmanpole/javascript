/*********************************************************************** 
 * Execution:  defult node     cmd>node Distance.js
 * @purpose: Find the distance from the point (x, y) to the origin (0, 0).
 * @file:Distance.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 27/02/2019
 **************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');

var x = rl.question("Enter the x value:");
var y = rl.question("Enter the y value:");
u.distance(x, y);