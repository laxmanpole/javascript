/**********************************************************************************************
 * Execution:defult node        cmd>node Unorderdlist.js
 * @purpose:
 * @overview:Take input as word and search it in linkedlist if word is found 
 *           in linked list then remove it otherwise add it.
 * @file:.Unorderdlist.js
 * @auther: Laxman Pole
 * @verison: 1.0.0
 * @since: 06/03/2019
 ***********************************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');
var l = require('./Implementation/Stack')
var stack = new l.Stack();

function Evaluation(exp) {
    for (i = 0; i < exp.length; i++) {
        ch = exp.charAt(i)

        if (ch == '(' && ch == '{' && ch == '[') {
            stack.push(ch);
            console.log(stack);

        } else {
            switch (ch) {
                case ')':
                    if (stack.pop() != '(') {
                        return false;
                    }
                    break;
                case '}':
                    if (stack.pop() != '{') {
                        return false;
                    }
                    break;
                case ']':
                    if (stack.pop() != '[') {
                        return false;
                    }
                    break;

            }
        }
    }
}
var exp = rl.question("Enter a Arithmetic expression:");
Evaluation(exp);


if (stack.getsize() === 0)
    console.log(" balanced parentheses ");
else
    console.log("not balanced parentheses ");