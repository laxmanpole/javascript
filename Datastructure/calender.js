/**********************************************************************************************************
 * Execution        :   1. default node          : cmd> node calendar.js
 *                      
 * 
 *  @purpose        :  To implement a Calender that takes the month and year as command-line 
 *                     arguments and prints the Calendar of the month.
 * 
 * 
 *  @file           :  calendar.js
 *  @overview       :  To creat an Calender by accepting month and year from user input.
 *  @author         : Laxman Pole
 *  @version        :  1.0
 *  @since          :  08-03-2019
 ***********************************************************************************************************/
var u = require('./Utility');
var req = require('util')
var rl = require('readline-sync');

function calender() {
    try {
        var month = rl.question("Enter a month:");

        if (month <= 0 || month > 12) {
            throw "Enter a valid month!!!";
        } else {
            var year = rl.question("Enter a Year:");

            var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

            var day = u.dayOfWeek(1, month, year);
            console.log(day);
            var leap = u.leapYear(year);
            if (leap = true) {

                dates[2] = 29;
            }
            for (var i = 0; i < week.length; i++) {
                req.print(week[i] + "  ");
            }
            console.log();
            for (var i = 0; i < (day * 5); i++) {
                req.print(" ");
            }

            for (var i = 1; i <= dates[month]; i++) {
                if (i < 10) {
                    req.print(" " + i + "   ");
                }

                if (i > 9) {
                    req.print("" + i + "   ")
                }
                if ((i + day) % 7 == 0) {
                    console.log();
                }

            }

            console.log("\n\n");
        }
    } catch (err) {
        console.log(err);
    }

}

calender();