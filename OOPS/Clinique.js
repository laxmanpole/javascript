/**********************************************************************************************************
 * Execution        :   1. default node          : cmd> node Clinique.js
 *                      
 * 
 *  @purpose        : This programme is used to manage a list of Doctors associated with the Clinique.
 *                    This also manages the list of patients who use the clinique.
 *  @description    : It manages Doctors by Name, Id, Specialization and Availability (AM, PM or both).
 *                    It manages Patients by Name, ID, Mobile Number and Age.
 *  @file           : Clinique.js
 *  @overview       : Print the Doctor Patient Report. Also show which Specialization is popular in the
 *                    Clinique as well as which Doctor is popular.
 *  @author         : Laxman Pole<polelaxman001@gmail.com>
 *  @version        :  1.0
 *  @since          :  15-03-2019
 ***********************************************************************************************************/

var u = require("./Utility")
var file = require('fs')
var read = require('readline-sync');

function Clinic() {
    try {
        var data = file.readFileSync("CliniqueData.json");
        var object = JSON.parse(data);
    } catch (FileNotFound) {
        console.log("File not found")
    }
    u.cliniqueManagement(object);

}
Clinic();