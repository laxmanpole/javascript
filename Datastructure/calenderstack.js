/**
 * Execution        :   1. default node          : cmd> node calendarstack.js
 *                      
 * 
 *  @purpose        :  To implement a Calender that takes the month and year as command-line 
 *                     arguments and prints the Calendar of the month.
 *  @file           :  calendar.js
 *  @overview       :  Display calender in Stack implemented using linked list
 *  @author         : Laxman Pole
 *  @version        :  1.0
 *  @since          :  08-03-2019
 */
var u = require('./Utility');
var req = require('util')
var rl = require('readline-sync');
var l = require('./Implementation/StackusLinklist')

function calenderstack() {
    try {
        var stack = new l.StackLinkedList();
        var month = rl.question("Enter a month:");
        if (month <= 0 || month > 12) {
            throw "Enter a valid month!!!";
        } else {
            var year = rl.question("Enter a year:");
            var dayOfWeek = u.dayOfWeek(1, month, year);


            //Months array
            var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "Septeber", "October", "November", "December"];

            //Weekdays array
            var weekDays = ["", "S", "M", "T", "W", "Th", "F", "S"];

            //Number of days in respective months
            var days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            //If leap year then february holds 29 days
            if ((month == 2) && (u.leapYear(year))) {
                days[month] = 29;
            }
            var dayStack = new l.StackLinkedList();
            var dateStack = new l.StackLinkedList();
            req.print(months[month] + "  " + year);
            console.log();

            //Push weekDays in the stack
            for (let i = 1; i < weekDays.length; i++) {
                dayStack.push(weekDays[i]);
            }
            dayStack = dayStack.reverseStack();
            for (let i = 1; i < weekDays.length; i++) {
                dayStack.pop(weekDays[i]);
            }

            //push days in the stack
            for (let j = days[month]; j >= 1; j--) {
                dateStack.push(j);
            }


            console.log();
            for (let i = 0; i < dayOfWeek; i++) {
                req.print("   ");
            }
            for (let i = 1; i <= days[month]; i++) {

                //pop dates from the stack
                if (i < 10) {
                    req.print("0" + dateStack.pop() + " ");
                } else {
                    req.print(i + " ");
                }
                //date mod 7 is 0 then it shifts to next line 
                if ((i + dayOfWeek) % 7 == 0)
                    console.log();
            }
        }

    } catch (err) {
        console.log(err);
    }

}
calenderstack();