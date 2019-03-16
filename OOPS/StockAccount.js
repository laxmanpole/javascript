/**********************************************************************************************************
 * Execution        :   1. default node          : cmd> node StockAccount.js
 *                      
 * 
 *  @purpose        :Commercial data processing-implements a data type that might be used by 
 *                   a financial institution to keep track of customer information.
 *  @description    :The StockAccount class also maintains a list of CompanyShares object which 
 *                   has Stock Symbol and Number of Shares as well as DateTime of the transaction.    
 *  @file           :StockAccount.js 
 *  @overview       :When buy or sell is initiated StockAccount checks if CompanyShares are available
 *                   and accordingly update or create an Object.  
 *  @author         :  Laxman Pole<polelaxman001@gmail.com>
 *  @version        :  1.0
 *  @since          :  12-03-2019
 ***********************************************************************************************************/

var rl = require('readline-sync');
var w = require('util');
var fs = require('fs');

class customer {
    constructor(userName, share, amount) {
        this.userName = userName;
        this.share = share;
        this.amount = amount;
    }
}

class company {
    constructor(NameOfCompany, NoOfShare, Price) {

        this.NameOfCompany = NameOfCompany;
        this.NoOfShare = NoOfShare;
        this.Price = Price;
    }
}

class stockAccount extends customer {

    operate() {
        console.log("#$ Commercial data processing $#");
        console.log("1. Company's portal");
        console.log("2. Customer's portal");
        var ch = rl.question("Enter your choice:\n");


        switch (ch) {

            case "1":
                console.log();
                console.log("#$ Company's portal $#");
                console.log("1. Add a company");
                console.log("2. List of companies");
                var com = rl.question("Enter your choice:");
                stockObj.companyPortal(com);

                break;
            case "2":
                console.log();
                console.log("#$ Customer's portal $#");
                console.log("1. New user");
                console.log("2. Registered user");
                var cust = rl.question("Enter your choice:");
                stockObj.customerPortal(cust);

                break;
            default:
                console.log("Enter valid choice");
        }

    }
    companyPortal(com) {

        switch (com) {

            case "1":
                var NameOfCompany = rl.question("Enter name of company:");
                var NoOfShare = rl.question("Enter number of share:");
                var Price = rl.question("Enter price of share:");
                var symbol = rl.question("Enter symbol of company:")
                var comp = new company(NameOfCompany, NoOfShare, Price, symbol);
                var companyData = fs.readFileSync('companyShare.json');
                let info = JSON.parse(companyData);
                info.company.push(comp);
                fs.writeFileSync('companyShare.json', JSON.stringify(info));
                console.log(info);
                console.log("Successfully data updated in the file");
                stockObj.operate();
                break;
            case "2":
                companyData = fs.readFileSync('companyShare.json');
                var info1 = JSON.parse(companyData);
                console.log("List of Companies:");
                console.log(info1);
                stockObj.operate();
                break;
        }
    }

    customerPortal(cust) {

        switch (cust) {

            case "1":
                var userName = rl.question("Enter name of customer:");
                var share = rl.question("Enter number of share:");
                var amount = rl.question("Enter price of share:");
                var customr = new customer(userName, share, amount);
                var customerData = fs.readFileSync('customerShare.json');
                let infoCust = JSON.parse(customerData);
                infoCust.customer.push(customr);
                fs.writeFileSync('customerShare.json', JSON.stringify(infoCust));
                console.log(infoCust);
                console.log("Successfully data updated in the file");
                stockObj.operate();
                break;
            case "2":
                var found = 0;
                var userName = rl.question("Enter user name for login:");
                customerData = fs.readFileSync('customerShare.json');
                var infoCust1 = JSON.parse(customerData);
                var userInfo = infoCust1.customer;
                userInfo.forEach(function(customer) {
                    if (userName == customer.userName) {
                        console.log(customer);
                        stockObj.buyOrSell(userName);
                        found++;
                    }
                });
                if (found == 0) {

                    console.log("No user found");
                    return null;
                }
                break;
            default:
                console.log("Enter valid choice");
        }

    }

    buyOrSell(userName) {

        console.log("1. Buy shares\n2. Sell shares");
        var chShare = rl.question("Enter your choice:");

        if (chShare == 1) {
            stockObj.buy(userName);
        } else if (chShare == 2) {
            stockObj.sell(userName);
        }
    }

    buy(userName) {
        var foundCom = 0;
        var companyData = fs.readFileSync('companyShare.json', 'utf8');
        var cmpJson = JSON.parse(companyData);
        let cmpInfo = cmpJson.company;
        console.log("List of company:");
        console.log(cmpInfo);
        var NameOfCompany = rl.question("Enter name of company to buy shares:");
        var NoOfShare = rl.question("Enter number of shares you want to purchase:");


        cmpInfo.forEach(function(company) {
            if (NameOfCompany == company.NameOfCompany && NoOfShare <= company.NoOfShare) {
                stockObj.buyShare(NameOfCompany, NoOfShare, userName);
                foundCom++;
            }
        });
        if (foundCom == 0) {

            console.log("Enter valid data");
        }

    }

    sell(userName) {
        var found = 0;
        var foundCom = 0;
        var companyData = fs.readFileSync('companyShare.json', 'utf8');
        console.log("List of company:");
        console.log(companyData);
        var NameOfCompany = rl.question("Enter name of company to sell shares:");
        var NoOfShare = rl.question("Enter number of shares you want to sell:");
        var Price = rl.question("Enter price of the share:")
        var customerData = fs.readFileSync('customerShare.json');
        let infoCust3 = JSON.parse(customerData);
        var userInfo2 = infoCust3.customer;
        userInfo2.forEach(function(customer) {
            if (userName == customer.userName && customer.share <= NoOfShare) {
                found++;
            }
        });

        var cmpJson = JSON.parse(companyData);
        var cmpInfo1 = cmpJson.company;
        cmpInfo1.forEach(function(company) {
            if (NameOfCompany == company.NameOfCompany) {
                foundCom++;
            }
        });
        if (foundCom == 0 && found == 0) {

            console.log("Enter valid data");
        } else {
            stockObj.sellShare(NameOfCompany, NoOfShare, Price, userName);
        }

    }

    buyShare(NameOfCompany, NoOfShare, userName) {
        var value;
        var num = parseInt(NoOfShare);
        var companyData = fs.readFileSync('companyShare.json', 'utf8');
        var cmpJson = JSON.parse(companyData);
        let cmpInfo2 = cmpJson.company;
        cmpInfo2.forEach(function(company) {
            if (NameOfCompany == company.NameOfCompany) {
                var userShare = parseInt(customer.share);
                var totalShare = userShare - NoOfShare;
                customer.share = totalShare;
                value = parseInt(company.Price);
            }
        });

        fs.writeFileSync('companyShare.json', JSON.stringify(cmpJson));
        var newData = fs.readFileSync('companyShare.json', 'utf8')
        let dataJson = JSON.parse(newData);
        console.log(dataJson);
        console.log('Successfully Updated');
        console.log();

        var customerData = fs.readFileSync('customerShare.json', 'utf8');
        let infoCust = JSON.parse(customerData);
        let userInfo3 = infoCust.customer;
        userInfo3.forEach(function(customer) {
            if (userName == customer.userName) {
                var userShare = parseInt(customer.share);
                var shareP = value;
                console.log(shareP);
                var add = userShare + num; //add shares in user shares
                customer.share = add;
                var total = shareP * num; //calculate share price
                //console.log(total);
                var userAmount = (Number(customer.amount));
                var uAmount = (userAmount - total);
                customer.amount = uAmount;
                console.log(userAmount);

            }
        });

        fs.writeFileSync('customerShare.json', JSON.stringify(infoCust));
        var newData = fs.readFileSync('customerShare.json', 'utf8')
        let detail = JSON.parse(newData);
        console.log(detail);
        console.log('Successfully updated');
        console.log();


    }

    sellShare(NameOfCompany, NoOfShare, Price, userName) {

        var price = parseInt(Price); //type conversion
        var num = parseInt(NoOfShare); //type conversion
        var add = num * price; //multiply number of shares by it's price
        /*
         * read company file
         */
        var companyData = fs.readFileSync('companyShare.json', 'utf8');
        var cmpJson2 = JSON.parse(companyData);
        var infoCom = cmpJson2.company;
        infoCom.forEach(function(company) {
            if (NameOfCompany == company.NameOfCompany) {
                /*
                 * check if entered company name is match with existing company name in company.json file
                 */
                var ns = parseInt(company.NoOfShare);
                var add = ns + num; //add number of shares with buy shares
                company.NoOfShare = add;

                /*
                 * write updated data in company.json file
                 */
                fs.writeFileSync('companyShare.json', JSON.stringify(cmpJson2));
                var newData = fs.readFileSync('companyShare.json', 'utf8')
                let detail = JSON.parse(newData);
                /*
                 * display company details
                 */
                console.log(detail);
                console.log('Successfully updated');
                console.log();
            }
        });
        /*
         * read userdetail file
         */
        var customerData = fs.readFileSync('customerShare.json', 'utf8');
        var custJson = JSON.parse(customerData);
        var userInfo4 = custJson.customer; //get user object in userdetail file
        userInfo4.forEach(function(customer) {
            /*
             * check entered user name is existing in file or not 
             */
            if (userName == customer.userName) {
                //after selling to company user shares will be minus
                let minus = customer.share - NoOfShare;
                // Remaining shares are updated
                customer.share = minus;
                var userAmount = parseInt(customer.amount);
                //add sell shares amount to user's shares amount 
                var amount = add + userAmount;
                //updated price is pass to user shares price 
                customer.amount = amount;

            }
        });
        /**
         * write updated changes in userdetail.json file
         */
        fs.writeFileSync('customerShare.json', JSON.stringify(custJson));
        /**
         * read userdetail.json file 
         */
        var newData = fs.readFileSync('customerShare.json', 'utf8');
        /**
         * get userdetail object and parse in string
         */
        let detail = JSON.parse(newData);
        /**
         * Display userdetail file
         */
        console.log(detail);
        console.log();
        //call to user's choice
        stockObj.operate();
    }
}

var stockObj = new stockAccount();
stockObj.operate();
module.exports = {
    stockAccount
}