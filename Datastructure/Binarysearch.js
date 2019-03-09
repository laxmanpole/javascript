/**
 * Execution        :   1. default node          : cmd> node Binarysearch.js
 *                      
 * 
 *  @purpose        :find the number of different binary search trees that can be created using these nodes.
 *  @file           : Binarysearch.js
 *  @overview       :You are given N nodes, each having unique value ranging from [1, N], how many different 
 *                   binary search tree can be created using all of them. 
 *  @author         : Laxman Pole
 *  @version        :  1.0
 *  @since          :  09-03-2019
 */

var u = require('./Utility');
var req = require('util')
var rl = require('readline-sync');
var l = require('./Implementation/BinaryImpl')
l.binarySearchTree();