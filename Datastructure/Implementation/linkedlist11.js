var u = require('../Utility');
var w = require('util');
var rl = require('readline-sync');



// User defined class node 
class Node {
    // constructor
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// linkedlist class 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(newData) {
        // Create the newNode & put in the data
        var newNode = new Node(newData);
        var current;
        if (this.head == null) {
            this.head = newNode;
        } else {
            current = this.head;

            // iterate till the end 
            while (current.next) {
                current = current.next;
            }

            // add newNode 
            current.next = newNode;
        }
        this.size++;
    }

    insertAfter(data, i) {
        if (i > 0 && i > this.size)
            return false;
        else {
            //creates a newNode 
            var newNode = new Node(data);
            var curr, prev;

            curr = this.head;
            //add element at first position
            if (i == 0) {
                newNode.next = head;
                this.head = newNode;
            } else {
                curr = this.head;
                var p = 0;

                //traverse through the list find the position to insert 
                while (p < i) {
                    p++;
                    prev = curr;
                    curr = curr.next;
                }
                // add element
                newNode.next = curr;
                prev.next = newNode;
            }
            this.size++;
        }
    }

    remove(data) {
        var current = this.head;
        var prev = null;

        //traverse through the list
        while (current != null) {
            //if current.data is equal to data then remove it. 
            if (current.data == data) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    search(value) {
        var current = this.head;
        var pos = 0;
        if (this.head.data == value) {
            return true;
        }
        while (current != null) {
            if (current.data == value) {
                return pos; //data found
            }
            current = current.next;
            pos++;
        }
        //data not found 
        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    printListO() {
        var pnode = this.head;
        var str = "";
        while (pnode) {

            str += pnode.data + " ";
            pnode = pnode.next;

        }
        w.print(str);

        try {
            fs.writeFileSync('orderedList.txt', str, 'utf8');
            w.print("File is updated.");
        } catch (err) {
            console.log("Error");
        }
    }

    show() {
        var temp = this.head;
        var str = "";
        while (temp != null) {
            str += " -> " + temp.data;
            temp = temp.next;
        }
        console.log(str);
    }

    printListU() {
        var pnode = this.head;
        var str = "";
        while (pnode) {
            console.log(pnode.data)
            if (pnode.data !== "undefined") {
                str += " " + pnode.data;

            }
            pnode = pnode.next;
        }
        var str1 = str.toString();
        // console.log(str1);
        // try {

        //     fs.writeFileSync('unorderedList.txt', str1, 'utf8');
        //     console.log("File is updated.");
        // } catch (err) {
        //     console.log(err);
        // }
    }

    index(data) {

        var index = this.head;
        for (let i = 0; i < this.size(); i++) {
            if (index.data === data) {
                return i;
            }
            index = index.next;
        }
        return -1;
    }

    size() {
        return this.size;
    }

    sort() {
        var temp;
        temp = this.head;
        var p = this.size;
        while (p > 0) {
            temp = this.head;
            while (temp.next !== null) {
                if ((temp.data) > (temp.next.data)) {
                    var t = temp.data;
                    temp.data = temp.next.data;
                    temp.next.data = t;
                }
                temp = temp.next;
            }
            p--;
        }
    }
}

module.exports = {

    LinkedList
}