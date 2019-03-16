/**********************************************************************************************************
 * Execution        :   1. default node          : cmd> node AddressBook.js
 *                      
 * 
 *  @purpose        :Create Object Oriented Analysis and Design of a simple Address Book Problem .
 *  @description    :An address book holds a collection of entries, each recording a person's first 
 *                   and last names, address, city, state, zip, and phone number.
 *  @file           :AddressBook.js
 *  @overview       :It must be possible to add a new person to an address book, to edit existing information about a person, and to delete a person. 
 *                   It must be possible to sort the entries in the address book alphabetically by last name , or by ZIP code . It must be possible 
 *                   to print out all the entries in the address book.
 *  @author         :Laxman Pole<polelaxman001@gmail.com>
 *  @version        :  1.0
 *  @since          :  14-03-2019
 ***********************************************************************************************************/

var rl = require('readline-sync');
var u = require("./Utility");
var fs = require('fs');
var data = fs.readFileSync("AddBook.json");
var object = JSON.parse(data);
u.addressbook(object);