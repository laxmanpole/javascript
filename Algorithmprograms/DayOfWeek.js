/**************************************************************************
 *Execution:default node         cmd> node DayOfWeek.js 
 *@purpose: Takes a date as input and prints the day of the week that date falls on.
 *@overview:find the day which is correct or not from given date.
 *@file:DayOfWeek.js
 *@auther: Laxman Pole
 *@verison: 1.0.0
 *@since: 01/03/2019
 ***************************************************************************/
var u = require('./Utility');
var rl = require('readline-sync');

function dayOfWeek() {
    var d = rl.question("Enter a day:")
    var m = rl.question("Enter a month:")
    var y = rl.question("Enter a year:")
    var num = u.dayOfWeek(d, m, y);
    var res = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
    if (num <= res.length) {
        console.log("The day falls on :" + res[num]);
    } else {
        console.log("Invalid day ");

    }
}
dayOfWeek();