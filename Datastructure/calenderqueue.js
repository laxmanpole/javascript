/********************************************************************************************
 * Execution        :   1. default node          : cmd> node calendar.js
 *                      
 * 
 *  @purpose        :  To implement a Calender that takes the month and year as command-line 
 *                     arguments and prints the Calendar of the month.
 * 
 * 
 *  @file           :  calendar.js
 *  @overview       :  Display calender in queue implemented using linked list
 *  @author         : Laxman Pole
 *  @version        :  1.0
 *  @since          :  08-03-2019
 **********************************************************************************************/
var u = require('./Utility');
var req = require('util')
var rl = require('readline-sync');
var l = require('./Implementation/Queue')

function calenderqueue() {
    try {
        var queue = new l.Queue();
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
            var dayQueue = new l.Queue();
            var dateQueue = new l.Queue();
            req.print(months[month] + "  " + year);
            console.log();

            //Enqueue weekDays in the queue
            for (let i = 1; i < weekDays.length; i++) {
                dayQueue.enqueue(weekDays[i]);
            }
            console.log();

            //Enqueue number of days in the month to the queue
            for (var i = 1; i <= days[month]; i++) {
                dateQueue.enqueue(i);
            }

            //dequeue weekDays from the queue and print
            for (let i = 1; i < weekDays.length; i++) {
                req.print(dayQueue.dequeue() + "  ");
            }

            console.log();
            for (var i = 0; i < dayOfWeek; i++) {
                req.print("   ");
            }

            //Iterate through days
            for (let i = 1; i <= days[month]; i++) {
                if (i < 10) {
                    req.print("0" + dateQueue.dequeue() + " ");
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
calenderqueue();