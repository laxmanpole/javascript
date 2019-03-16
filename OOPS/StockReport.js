/**********************************************************************************************************
 * Execution        :   1. default node          : cmd> node Stock.js
 *                      
 * 
 *  @purpose        :Write a program to read in Stock Names, Number of Share, Share Price.
                     Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @description    :N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share Price                
 *  @file           : Stock.js
 *  @overview       :Calculate the value of each stock and the total value .Print the Stock Report.  
 *  @author         :  Laxman Pole<polelaxman001@gmail.com>
 *  @version        :  1.0
 *  @since          :  12-03-2019
 ***********************************************************************************************************/
var file = require('fs');
var u = require('./Utility');
var read = require('readline-sync');

function StockReport() {
    try {
        var data = file.readFileSync("StockReport.json");
        var object = JSON.parse(data);
    } catch (err) {
        console.log("FileNotFound")
    }
    u.stockmanagement(object);
}
StockReport();