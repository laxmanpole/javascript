/*******************************************************************************************************
 * *************************Queue using LinkedList******************************************************
 *******************************************************************************************************/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class QueueLinkedlist {
    constructor(head) {
        this.head = head;
    }

    enqueue(data) {
        var temp = this.head;
        var newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        return true;
    }


    dequeue() {
        var temp = this.head;
        if (this.head == null) {
            console.log("Queue is empty");
            return null;
        } else {
            this.head = temp.next;
            temp.next = null;
            return temp.data;
        }
    }


    peek1() {
        var temp = this.head;
        if (this.head == null) {
            console.log("Queue is empty");
            return null;
        } else {
            this.head = temp.next;
            return temp.data;
        }
    }


    toString() {
        var temp = this.head;
        var string = "";
        while (temp != null) {
            string = string + temp.data;
            if (temp.next != null) {
                string = string + ",";
            }
            temp = temp.next;
        }
        return string;
    }


    peek(position) {
        var temp = this.head;
        while (position > 1) {
            temp = temp.next;
            position--;
        }
        return temp.data;
    }


    size() {
        var temp = this.head;
        var count = 0;
        while (temp != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }
}
module.exports = {
    QueueLinkedlist
}