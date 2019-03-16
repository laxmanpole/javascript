var u = require('./Utility');
var read = require('readline-sync');
var file = require('fs')
var q = require('../Datastructure/Implementation/QueueusLinklist')
var stack = require('../Datastructure/Implementation/Linkedlist')

module.exports = {
    inventory(object) {
        console.log("1. Rice\n2. Pulses\n3. Wheat");
        var ch = read.question("Enter your choice:");
        switch (ch) {
            case "1":

                //data from object
                var wt = read.question("Enter the weight of Rice:");
                for (let i = 0; i <= object.Rice.length - 1; i++) {
                    console.log(object.Rice[i].Name + "'s price per kg is:" + object.Rice[i].Price + " for " + wt + " kg price is:" + wt * object.Rice[i].Price);
                }
                break;
            case "2":

                //data from object
                var wt = read.question("Enter the weight of Pulse:");
                for (let i = 0; i <= object.Pulses.length - 1; i++) {
                    console.log(object.Pulses[i].Name + "'s price per kg is:" + object.Pulses[i].Price + " for " + wt + " kg price is:" + wt * object.Pulses[i].Price);
                }
                break;
            case "3":

                //data from object
                var wt = read.question("Enter the weight of Wheat:");
                for (let i = 0; i <= object.Wheat.length - 1; i++) {
                    console.log(object.Wheats[i].Name + "'s price per kg is:" + object.Wheats[i].Price + " for " + wt + " kg price is:" + wt * object.Wheats[i].Price);
                }
                break;
            default:
                console.log("Enter valid choice:");

        }

    },
    regex(str, name, fname, mobile, date) {
        var nameRegex = /\w/;
        var contactRegex = /\d/;
        var dateRegex = /\d\d-\d-\d\d\d\d/;

        if (nameRegex.test(name)) {
            str = str.replace("<<name>>", name);
        } else {
            console.log("Enter a valid name:");
        }
        if (nameRegex.test(fname)) {
            str = str.replace("<<full name>>", fname);
        } else {
            console.log("Enter a valid full name:");
        }
        if (contactRegex.test(mobile)) {
            str = str.replace("91­xxxxxxxxxx", mobile);
        } else {
            console.log("Enter a valid mobile no:");
        }
        if (dateRegex.test(date)) {
            str = str.replace("<<xx/xx/xxxx>>", date);
        } else {
            console.log("Enter a valid date:");
        }
        console.log(str);

    },
    stockmanagement(object) {
        console.log("1. TATA\n2. BMC\n3. Cognizant");
        var ch = read.question("Enter your choice:");
        switch (ch) {
            case "1":

                //data from object
                var share = read.question("Enter the number of shares you want to purchase:");

                console.log(object.Stock[0].Name + "'s  per stock price is:" + object.Stock[0].Price + " for " + share + " total price is:" + share * object.Stock[0].Price);

                break;
            case "2":

                //data from object
                var share = read.question("Enter the number of shares you want to purchase:");

                console.log(object.Stock[1].Name + "'s  per stock price is:" + object.Stock[1].Price + " for " + share + " total price is:" + share * object.Stock[1].Price);

                break;
            case "1":

                //data from object
                var share = read.question("Enter the number of shares you want to purchase:");

                console.log(object.Stock[2].Name + "'s  per stock price is:" + object.Stock[2].Price + " for " + share + " total price is:" + share * object.Stock[2].Price);

                break;
            default:
                console.log("Enter valid choice:");

        }

    },


    // purpose: Taking stock name as input and validate it

    inStockName() {
        var name = read.question("Enter the name of stock : ");
        var flag = true;
        while (flag) {
            //for validating inputs

            if (isNaN(name)) {
                //for validate the name
                flag = false;
            } else {
                var name = read.question(
                    "Wrong input !!!...Please enter correct name of Stack : "
                );
            }
        }
        return name;
    },

    // purpose: Taking stock No as input and validate it.

    inNoOfShare() {

        var Noofshares = read.questionInt("Enter how many shares you have? : ");

        if (isNaN(Noofshares)) {
            //for validate full name
            throw "Wrong input!!!!!...Please enter No of shares in integer:"
        }

        return Noofshares;
    },

    //// purpose: Taking share price as input and validate it.
    inSharePrice() {
        var flag = true;
        var shareprice = read.question("Enter the price of your share : ");
        while (flag) {
            if (!isNaN(shareprice)) {
                flag = false;
            } else {
                var shareprice = read.question(
                    "Wrong input !!!...Please enter  correct price of shares : "
                );
            }
        }
        return shareprice;
    },
    inventoryman(object, file) {
        console.log("1. Add Stock\n2. Edit Stock\n3. Delete Stock\n4. Display Stock\n5.  Save into file\n6. Exit");
        var ch = read.questionInt("Enter Your choice:")
        if (isNaN(ch)) throw "Enter a valid No:"
        switch (ch) {
            case 1:
                this.addStock(object);

                return this.inventoryman(object);
                break;
            case 2:
                this.editStock(object);

                return this.inventoryman(object);
                break;
            case 3:
                this.deleteStock(object);

                return this.inventoryman(object);
                break;
            case 4:
                this.displayStock(object);

                return this.inventoryman(object);
                break;
            case 5:
                this.saveStock(object, file);

                return this.inventoryman(object);
                break;
            case 6:
                console.log("Exit Successfully:")
                break;
            default:
                console.log("Enter valid choice:");
        }

    },
    addStock(object) {
        var stkobj = object.Stock;
        var name = this.inStockName();
        var number = this.inNoOfShare();
        var amt = this.inSharePrice();
        stkobj.push({
            Name: name,
            Share: number,
            Price: amt
        });
        console.log(object);
    },
    editStock(object) {
        var stkobj = object.Stock;
        var name = this.inStockName();
        var value = -1;
        for (key in stkobj) {
            if (stkobj[key].Name == name) {
                value = key;
            }
        }
        if (value === -1) {
            console.log("Entered name does not match with any of the elements with the stock objects,please valid name:");
            this.editStock(object)
        }
        console.log(stkobj[value]);
        //console.log();
        console.log("\n1. edit stock name\n2. edit stock shares\n3. edit stock price");
        try {
            var ch = read.questionInt("Enter Your choice:")
            if (isNaN(ch)) throw "Enter a valid No:"
            switch (ch) {
                case 1:
                    var name1 = this.inStockName();
                    stkobj[value].Name = name1;
                    console.log(stkobj);
                    break;
                case 2:
                    var number = this.inSharePrice();
                    stkobj[value].Share = number;
                    console.log(stkobj);
                    break;
                case 3:
                    var amount = this.inSharePrice();
                    stkobj[value].Price = amount;
                    console.log(stkobj);
                    break;
                default:
                    console.log("Enter valid choice:");
            }
        } catch (err) {
            console.log(err)
        }
    },
    deleteStock(object) {
        var stkobj = object.Stock;
        var name = this.inStockName();
        var val = -1;
        for (key in Stock) {
            if (stkobj[key].Name == name) {
                val = key;
            }
        }
        if (val == -1) {
            console.log("Wrong input");
        }
        console.log(stkobj[value]);
        var ch = read.questionInt("\n1. delete sure\n2.  exit:");
        if (ch == 1) {
            stkobj.splice(val, 1)
            console.log(stkobj);
        } else {
            console.log("Wrong input");
            return;
        }

    },
    displayStock(object) {
        var stkobj = object.Stock;
        for (key in stkobj) {
            console.log(stkobj[key])
        }
    },
    saveStock(object) {
        try {
            file.writeFileSync("StockReport.json", JSON.stringify(object));
        } catch (err) {
            console.log(err);
        }
        console.log("file write successfully........")
    },

    Shuffle(Deck) {

        for (let i = 0; i < Deck.length; i++) {
            var random = Math.floor(Math.random() * Deck.length);
            var temp = Deck[random];
            Deck[random] = Deck[i];
            Deck[i] = temp;
        }
        for (let j = 1; j < 5; j++) {
            console.log("Player number is  " + j + "  having cards are:");
            for (let k = 0; k < 9; k++) {
                console.log(Deck.pop())
            }

        }


    },
    ShuffleCards(Deck) {
        for (let i = 0; i < Deck.length; i++) {
            var random = Math.floor(Math.random() * Deck.length);
            var temp = Deck[random];
            Deck[random] = Deck[i];
            Deck[i] = temp;
        }
        var queue = new q.QueueLinkedlist;
        for (let j = 0; j < Deck.length; j++) {
            queue.enqueue(Deck[j]);
        }
        for (let j = 1; j <= 4; j++) {
            console.log("Player number is  " + j + "  having cards are:");
            for (let k = 0; k < 9; k++) {
                var arr = Array(queue.dequeue())
                arr.sort();
                console.log(arr);


            }

        }

    },
    /*********************************Address Book******************************************************/
    addressbook(data) {
        console.log("#$ Address Book $#");
        console.log("1. Add a person\n2. Remove person\n3. Edit person's info\n4. Sort by lastName\n5. Sort by zipCode\n6.Display");
        var ch = read.question("Enter your choice:");
        if (ch == 1) {
            this.addPerson(data);
        } else if (ch == 2) {
            this.removePerson(data);
        } else if (ch == 3) {
            this.EditPerson(data);
        } else if (ch == 4) {
            this.sortByName(data);
        } else if (ch == 5) {
            this.sortByZip(data);
        } else if (ch == 6) {
            this.display(data);
        } else {
            console.log("Invalid key/input ");
        }
    },

    addPerson(data) {

        var firstName = read.question("Enter first name:");
        var lastName = read.question("Enter last name:");
        var address = read.question("Enter address:");
        var ID = read.question("Enter id:");
        var zipCode = read.question("Enter zip code:");
        data.person.push({
            "firstName": firstName,
            "lastName": lastName,
            "address": address,
            "ID": ID,
            "zipCode": zipCode
        })
        file.writeFileSync('AddBook.json', JSON.stringify(data));
        this.addressbook(data);
    },

    removePerson(data) {

        var firstName = read.question("Enter person's first name to delete:");
        for (let i = 0; i < data.person.length; i++) {
            if (data.person[i].firstName == firstName) {
                var index = data.person.indexOf(data.person[i]);

                data.person.splice(index, 1);
            }

        }
        fs.writeFileSync('AddBook.json', JSON.stringify(data));
        this.addressbook(data);
    },

    EditPerson(data) {

        var firstName = read.question("Enter person's first name to edit info:");
        for (i in data.person) {
            if (data.person[i].firstName == firstName) {
                console.log(data.person[i]);
                index = i;
                break;
            }
        }

        console.log("1. Edit id\n2. Edit address\n3. Edit zip code\n");
        var ch1 = rl.question("Enter your choice:");
        switch (ch1) {
            case "1":
                var id1 = read.question("Enter new id:");
                data.person[index].ID = id1;
                break;
            case "2":
                var address1 = rl.question("Enter new address:");
                data.person[index].address = address1;
                break;
            case "3":
                var zipCode1 = rl.question("Enter new zipCode:");
                data.person[index].zipCode = zipCode1;
                break;
            default:
                console.log("Enter valid choice");
        }
        fs.writeFileSync('AddBook.json', JSON.stringify(data));
        this.addressbook(data);
    },

    //method for sorting by name
    sortByName(data) {

        for (let i = 0; i < data.person.length; i++) {
            for (let j = 0; j < data.person.length - 1; j++) {
                if (data.person[j].lastName.localeCompare(data.person[j + 1].lastName) == 1) {
                    let temp = data.person[j];
                    data.person[j] = data.person[j + 1];
                    data.person[j + 1] = temp;
                }
            }
        }
        console.log(data);
        file.writeFileSync('AddBook.json', JSON.stringify(data));
        this.addressbook(data);
    },
    //method for sorting by zipcode
    sortByZip(data) {

        for (let i = 0; i < data.person.length; i++) {
            for (let j = 0; j < data.person.length - 1; j++) {
                if (data.person[j].zipCode > data.person[j + 1].zipCode) {
                    let temp = data.person[j];
                    data.person[j] = data.person[j + 1];
                    data.person[j + 1] = temp;
                }
            }
        }
        console.log(data);
        file.writeFileSync('AddBook.json', JSON.stringify(data));
        this.addressbook(data);
    },

    display(data) {
        for (let i = 0; i < data.person.length; i++) {
            console.log(data.person[i]);
        }

    },
    /* *****************************************Clinique**********************************************************/
    cliniqueManagement(data) {
        console.log("#$ Clinique Management $#");
        console.log("1. Search Doctor\n2. Search patient\n3. Add doctor\n4. Add patient\n5. Take appointment\n6. Check specialist\n");
        var ch = read.question("Enter your choice:");
        if (ch == 1) {
            this.searchDoctor(data);
        } else if (ch == 2) {
            this.searchPatient(data);
        } else if (ch == 3) {
            this.addDoctor(data);
        } else if (ch == 4) {
            this.addPatient(data);
        } else if (ch == 5) {
            this.appointment(data);
        } else if (ch == 6) {
            this.specialist(data);
        } else {
            console.log("Invalid key/input ");
        }
    },

    addDoctor(data) {

        var drName = read.question("Enter name of the doctor:");
        var drId = read.question("Enter doctor's id:");
        var speciality = read.question("Enter doctor's speciality:");
        var availability = read.question("Enter availability time of doctor as AM, PM or Both:");
        data.doctor.push({
            "drName": drName,
            "drId": drId,
            "speciality": speciality,
            "availability": availability,
            "NoOfAppointment": 0
        })
        file.writeFileSync('cliniqueData.json', JSON.stringify(data));
        this.cliniqueManagement(data);
    },

    addPatient(data) {
        var pName = read.question("Enter name of the patient:");
        var pId = read.question("Enter patient's id:");
        var mobNo = read.question("Enter patient's mobile number:");
        var age = read.question("Enter patient's age:");
        data.patient.push({
            "pName": pName,
            "pId": pId,
            "mobNo": mobNo,
            "age": age
        })
        file.writeFileSync('cliniqueData.json', JSON.stringify(data));
        this.cliniqueManagement(data);
    },

    appointment(data) {
        var drName = read.question("Enter doctor's name:");
        var pName = read.question("Enter patients name:");
        var time = read.question("Enter appointment time as AM, PM or Both:");
        let i = -1
        for (key in data.doctor) {
            if (data.doctor[key].drName == drName) {
                i = key;
            }
        }
        if (i != -1) {
            if (data.doctor[i].NoOfAppointment < 5) {
                if (data.doctor[i].availability == time) {
                    data.cliniqueAppointment.push({
                        "drName": drName,
                        "pName": pName,
                        "time": time
                    })
                    data.doctor[i].NoOfAppointment++;
                    console.log("Appointment booked")
                } else {
                    console.log("Doctor isn't available in this time")
                }
            } else {
                console.log("Doctor's appointments are full");
            }
        } else {
            console.log("Doctor not found")
        }
        file.writeFileSync('cliniqueData.json', JSON.stringify(data));
        this.cliniqueManagement(data);
    },

    searchDoctor(data) {

        console.log("1. Search by name\n2. Search by Id\n3. Search by speciality\n4. Search by availability\n");
        var ch = read.question("Enter your choice:");
        switch (ch) {
            case "1":
                var drName = read.question("Enter name of the doctor:");
                for (i in data.doctor) {
                    if (data.doctor[i].drName == drName) {
                        console.log(data.doctor[i]);
                    }
                }
                break;
            case "2":
                var drId = read.question("Enter id of the doctor:");
                for (i in data.doctor) {
                    if (data.doctor[i].drId == drId) {
                        console.log(data.doctor[i]);
                    }
                }
                break;
            case "3":
                var speciality = read.question("Enter speciality of the doctor:");
                for (i in data.doctor) {
                    if (data.doctor[i].speciality == speciality) {
                        console.log(data.doctor[i]);
                    }
                }
                break;
            case "4":
                var availability = read.question("Enter availability of the doctor:");
                for (i in data.doctor) {
                    if (data.doctor[i].availability == availability) {
                        console.log(data.doctor[i]);
                    }
                }
                break;
            default:
                console.log("Enter valid choice");
        }
        this.cliniqueManagement(data);
    },

    searchPatient(data) {

        console.log("1. Search by name\n2. Search by Id\n3. Search by mobile number\n");
        var ch1 = read.question("Enter your choice:");
        switch (ch1) {
            case "1":
                var pName = read.question("Enter name of the patient:");
                for (i in data.patient) {
                    if (data.patient[i].pName == pName) {
                        console.log(data.patient[i]);
                    }
                }
                break;
            case "2":
                var pId = read.question("Enter id of the patient:");
                for (i in data.patient) {
                    if (data.patient[i].pId == pId) {
                        console.log(data.patient[i]);
                    }
                }
                break;
            case "3":
                var mobNo = read.question("Enter mobile no of the patient:");
                for (i in data.patient) {
                    if (data.patient[i].mobNo == mobNo) {
                        console.log(data.patient[i]);
                    }
                }
                break;
            default:
                console.log("Enter valid choice");
        }
        this.cliniqueManagement(data);
    },

    specialist(data) {

        let speciality = read.question("Enter speciality:");
        for (let key in data.doctor) {
            if (data.doctor[key].speciality == speciality) {
                console.log("Doctor name:" + data.doctor[key].drName);
                console.log("Availability:" + data.doctor[key].availability);
            }
        }
        console.log("No doctors with this speciality");
        this.cliniqueManagement(data);
    },



}