/**********************************************************************************************
 * Execution:defult node        cmd>node Orderdlist.js
 * @purpose:Read the number from file and stored in linkedlist & search a number 
 *          if match with linkedlist  then remove it otherwise add it.
 * @overview:Take input as number and search it in linkedlist if number is found 
 *           in linked list then remove it otherwise add it and display the ascendind order.
 * @file:.Unorderdlist.js
 * @author: Laxman Pole
 * @verison: 1.0.0
 * @since: 05/03/2019
 ***********************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var ll = require('./Implementation/Linkedlist')


try {
    var linklist = new ll.LinkedList();
    var data;
    data = u.fileCall('size.txt');

    for (let index = 0; index < data.length; index++) {
        linklist.add(data[index]);
    }
    var d = linklist.display();
    console.log(d);

    var name = rl.question("Enter the data you want to search: ");
    var check = linklist.search(name);

    if (check) {
        linklist.remove(name);

    } else {
        linklist.add(name);

    }
    linklist.sort();
    var d = linklist.display();
    console.log(d);

    u.writeFile('size.txt', d)
} catch (err) {
    console.error(err);
}