/*************************************************************************** 
 * Execution:  defult node     cmd>node Array2d.js
 * @purpose: create 2D array in memory to read in M rows and N columns.
 * @overview:check entered element are placed in right position. 
 * @file:Array2d.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 26/02/2019
 *****************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');

var rows = rl.question("Enter no of rows:");
var cols = rl.question("Enter no of columns:");
u.array2d(rows, cols)