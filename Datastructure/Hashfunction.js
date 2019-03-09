u = require('./Utility');
const rl = require('readline-sync');
const hash = require('./Implementation/Hash');


function hashstore() {
    try {
        var num = rl.question("Enter the number of hash elements ");
        if (isNaN(num)) throw "PLZ ENTER A VALID NUMBER "
        var arr = [];
        for (let i = 0; i < num; i++) {
            arr[i] = rl.questionInt("Enter the hash element:")
        }
        console.log(arr);
        var hs = new hash.Hashtable();
        for (let index = 0; index < arr.length; index++) {

            hs.addhash(arr[index]);
        }
        hs.print();
    } catch (err) {
        console.log("ERROR :" + err);

    }
}
hashstore();