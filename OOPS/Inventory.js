/**********************************************************************************************************
 * Execution        :   1. default node          : cmd> node Inventory.js
 *                      
 * 
 *  @purpose        :  Create Inventory Object from JSON. Calculate the value for every Inventory.
 *  @description    :  To Create a JSON file having Inventory Details for Rice, Pulses and Wheats
                       with properties name, weight, price per kg.                
 *  @file           :  Inventory.js
 *  @overview       :  To calculate the total cost of each object in inventory for given quantity.
 *  @author         :  Laxman Pole<polelaxman001@gmail.com>
 *  @version        :  1.0
 *  @since          :  12-03-2019
 ***********************************************************************************************************/
var file = require('fs');
var u = require('./Utility');
var read = require('readline-sync');

function Inventory() {
    try {
        var data = file.readFileSync("inventoryData.json");
        var object = JSON.parse(data);
    } catch (err) {
        console.log("FileNotFound")
    }
    u.inventory(object);
}
Inventory();