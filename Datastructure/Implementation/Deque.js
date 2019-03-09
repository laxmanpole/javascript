/***************************************************************************************
 * ************************************DEQUE OPERATION**********************************
 ***************************************************************************************/
class Deque {
    // Array is used to implement a deque
    constructor(element) {
        this.items = [];
    }

    addFront(element) {
        // adding element to the queue 
        this.items.unshift(element);

    }
    addRear(element) {
        this.items.push(element);
    }

    removeFront() {
        // removing element from the front
        // returns underflow when called 
        // on empty deque
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    removeRear() {
        return this.items.pop();
    }

    // isEmpty function 
    isEmpty() {
            // return true if the queue is empty. 
            return this.items.length == 0;
        }
        // printQueue function 
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

}
module.exports = {
    Deque
}