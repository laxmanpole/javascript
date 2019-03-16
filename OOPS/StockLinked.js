/**********************************************************************************************************
 * Execution        :   1. default node          : cmd> node StockLinked.js
 *                      
 * 
 *  @purpose        :Commercial data processing-implements a data type that might be used by 
 *                   a financial institution to keep track of customer information.   
 *  @file           :StockLinked.js
 *  @overview       :Maintain the List of CompanyShares in a Linked List So new CompanyShares 
 *                   can be added or removed easily
 *  @author         :  Laxman Pole<polelaxman001@gmail.com>
 *  @version        :  1.0
 *  @since          :  16-03-2019
 ***********************************************************************************************************/

var u = require('./Utility');
var fs = require('fs');
var rl = require('readline-sync');
var dst = require('../Datastructure/Implementation/Linkedlist');


class Stock {
    constructor() {
        var company = fs.readFileSync('companyShare.json', 'utf8');
        this.comp = JSON.parse(company);
        var customer = fs.readFileSync('customerShare.json');
        this.cust = JSON.parse(customer);
        this.lldst = new dst.LinkedList();
    }
}
class StockLinkedList extends Stock {

    stockAdd() {
        do {
            console.log("1. Add company\n2. Remove company\n3. Print list\n4. Write to file\n");
            var ch = rl.question("Enter your choice:");
            switch (ch) {
                case "1":
                    this.addCompany();
                    break;
                case "2":
                    this.removeCompany();
                    break;
                case "3":
                    this.printList();
                    break;
                case "4":
                    this.writeToFile();
                    break;
                default:
                    console.log("Enter valid choice");
            }
        } while (ch <= 4);

    }


    addList() {
        for (let key in this.comp.company) {
            this.lldst.add(this.comp.company[key]);
        }
        this.stockAdd();
    }
    addCompany() {
        var NameOfCompany = rl.question("Enter the name of company:");
        var symbol = rl.question("Enter the symbol of company:");
        var NoOfShare = rl.question("Enter the number of share:");
        var Price = rl.question("Enter the price of company:");
        let newCompany = {
            "NameOfCompany": NameOfCompany,
            "symbol": symbol,
            "NoOfShare": NoOfShare,
            "Price": Price
        }
        this.lldst.add(newCompany);
    }

    removeCompany() {
        let current = this.lldst.first;
        var NameOfCompany = rl.question("Enter name of the company to remove:");
        while (current.data.NameOfCompany != NameOfCompany && current != null) {
            current = current.next;
        }
        if (current != null) {
            this.lldst.removeItem(current.data);
            console.log("Company removed");
        } else {
            console.log("Company not found");
        }
    }

    printList() {
        var current = this.lldst.first;
        while (current !== null) {
            console.log("Name Of the company:" + current.data.NameOfCompany);
            console.log("Symbol of the company:" + current.data.symbol);
            console.log("Number of share:" + current.data.NoOfShare);
            console.log("Price:" + current.data.Price);
            current = current.next;
        }
    }

    writeToFile() {
        this.comp.company = [];
        let current = this.lldst.first;
        while (current != null) {
            this.comp.company.push(current.data)
            current = current.next;
        }
        fs.writeFileSync('companyShare.json', JSON.stringify(this.comp));
    }
}

var stockO = new StockLinkedList();
stockO.addList();