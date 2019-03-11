/*****************************************************************************************************
 * *******************************Stack using LinkedList**********************************************
 *****************************************************************************************************/



class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }

}

class StackLinkedList {
    constructor(element) {
        this.head = null;
        this.size = 0;

    }

    push(element) {
        var n = new Node(element);
        if (this.head === null) {
            this.head = n;
            this.size++
                return;
        } else {
            var curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            this.size++;
            curr.next = n;
        }
    }

    pop() {
        if (this.head === null) {
            console.log("stack underflow");
            return null;
        }

        var curr = this.head;
        var pre = this.head;
        if (curr.next === null) {
            this.head == null;
            return curr.element;
        }
        while (curr.next != null) {
            pre = curr;
            curr = curr.next;
        }
        pre.next = null;
        this.size--;
        return curr.element;
    }

    peek() {
        if (this.head === null) {
            console.log("stack underflow");
            return null;
        }

        var curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        return curr.element;
    }

    isEmpty() {
        return this.size === 0;

    }

    getSize() {
        return this.size;
    }

    display() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element;
            if (curr.next != null) {
                str += ",";

            }
            curr = curr.next;
        }
        console.log(str);
    }
    reverseStack(stack) {
        var stk = new StackLinkedList;
        var n = this.getSize();
        for (let i = 0; i < n; i++) {
            stk.push(this.pop());
        }
        return stk;
    }
}

module.exports = {
    StackLinkedList
}