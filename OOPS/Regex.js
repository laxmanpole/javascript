/**********************************************************************************************************
 * Execution        :   1. default node          : cmd> node Regex.js
 *                      
 * 
 *  @purpose        : Use Regex to replace name, full name, Mobile#, and Date with proper value.
 *  @description    : Read in the following message: Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx.
                      Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.               
 *  @file           :  Regex.js
 *  @overview       : Use Regex to Print the Modified Message.
 *  @author         :  Laxman Pole<polelaxman001@gmail.com>
 *  @version        :  1.0
 *  @since          :  12-03-2019
 ***********************************************************************************************************/

var file = require('fs');
var u = require('./Utility');
var read = require('readline-sync');

function Regex() {
    try {
        var data = file.readFileSync("Regexmsg.txt");

    } catch (err) {
        console.log("FileNotFound")
    }
    try {
        var flag = true;
        var name = read.question("Enter Your Name:");
        while (flag) {
            if (isNaN(name))
                flag = false;
            else
                console.log("Enter a valid name:")
        }
        var fname = read.question("Enter Your Full Name:");
        while (flag) {
            if (isNaN(fname))
                flag = false;
            else
                console.log("Enter a valid name:")
        }
        var mobile = read.question("Enter Your mobile number:");

        if (mobile.length != 10)

            throw "Enter a valid mobile number:";
        var ds = new Date();
        var date = ds.getDate() + "-" + (ds.getMonth() + 1) + "-" + (ds.getFullYear());
        console.log(date)

        var str = data.toString();

        u.regex(str, name, fname, mobile, date);
    } catch (err) {
        console.log(err)
        Regex()
    }
}
Regex();