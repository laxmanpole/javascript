/**********************************************************************************************
 * Execution:defualt node        cmd>node Unorderdlist.js
 * @purpose:Read the text from file and stored in linkedlist & search a word 
 *          if match with linkedlist text then remove it otherwise add it.
 * @overview:Take input as word and search it in linkedlist if word is found 
 *           in linked list then remove it otherwise add it.
 * @file:.Unorderdlist.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 05/03/2019
 ***********************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var ll = require('./Implementation/Linkedlist')


try {
    var linklist = new ll.LinkedList();
    var data;
    data = u.fileCall('file.txt');

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
    var d = linklist.display();
    console.log(d);

    u.writeFile('file.txt', d)
} catch (err) {
    console.error(err);
}