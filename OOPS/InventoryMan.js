/**********************************************************************************************************
 * Execution        :   1. default node          : cmd> node InventoryMan.js
 *                      
 * 
 *  @purpose        : To Create InventoryManager to manage the Inventory. 
 *  @description    : The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.               
 *  @file           :InventoryMan.js
 *  @overview       : read in JSON File and Calculate the value for every Inventory.
 *  @author         :  Laxman Pole<polelaxman001@gmail.com>
 *  @version        :  1.0
 *  @since          :  13-03-2019
 ***********************************************************************************************************/

var file = require('fs');
var u = require('./Utility');
var read = require('readline-sync');

function Inventory() {
    try {
        var data = file.readFileSync("StockReport.json");
        var object = JSON.parse(data);
    } catch (err) {
        console.log("FileNotFound")
    }
    u.inventoryman(object);
}
Inventory();