var u = require('./Utility');
var rl = require('readline-sync');

module.exports = {
    /*************************String Anagram*************************************/
    isAnagram(a, b) {
        var x = [];
        x = a.toLowerCase();
        var y = [];
        y = b.toLowerCase();
        if (x.length != y.length) {
            console.log("Given string is not Anagram.");
        } else {
            var m = [],
                n = [];
            m = x.split("");
            n = y.split("");
            x = m.sort();
            y = n.sort();
            if (x.length == y.length) {
                var j = 0;
                while (j < x.length) {
                    for (let i = j; i < x.length; i++) {
                        if (x[j] != y[i]) {
                            return false;
                        } else {
                            j++;
                        }
                    }
                }
                return true;
            }
        }
    },
    /*****************************Number Anagram******************************************/
    isAnagramNum(num, num1) {
        var m = [],
            n = [];

        m = num.split("");
        n = num1.split("");
        if (m.length != n.length) {
            return false;
        } else {
            m = m.sort();
            n = n.sort();
            var j = 0;
            while (j < m.length) {
                for (let i = 0; i < m.length; i++) {
                    if (m[j] != n[i]) {
                        return false;
                    } else {
                        j++;
                    }
                }
                return true;

            }
        }
    },
    /*****************************String Palindrome********************************************* */

    isPalimdrome2String(num1, num2) {
        var str = "";
        num1 = num1 + "";
        num2 = num2 + "";
        for (let i = 0; i < num1.length; i++) {
            str = num1.charAt(i) + str;

        }
        if (str == num2) {
            return true;
        }
        return false;
    },
    /*****************To Find Prime Number in between 0 to 1000****************************** */

    primenumber(n) {
        if (n == 0 || n == 1) {
            return false;
        } else {
            for (let i = 2; i < n; i++) {
                if (n % i == 0) {
                    return false;
                }
            }
            return true;
        }
    },
    /********************given prime Number is Anagram and Palindrome******************************/
    isAnagramPalimdrome() {
        var arr = [];
        for (let index = 0; index < 1000; index++) {
            if (this.primenumber(index)) {
                arr.push(index);
            }

        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (this.isAnagramNum(arr[i].toString(), arr[j].toString())) {
                    if (this.isPalimdrome2String(arr[i], arr[j])) {
                        console.log(arr[i], "  ", arr[j]);
                    }
                }
            }
        }
    },
    /***********************Bubble Sort*********************************** */

    bubblesortInt(arr, length) {
        var temp = 0;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    //swap elements  
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }

            }
        }
        console.log("After sort the element:" + arr);
        // return arr;
    },
    /**************************Insertion Sort ********************************************/

    insertionsort(arr) {
        var temp;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
            }
        }
        return arr;
    },

    /*********************Binary Search For String************************************/
    binarysearchwords(arr2, search) {
        var startIndex = 0,
            stopIndex = arr2.length - 1,
            middle = Math.floor((stopIndex + startIndex) / 2);


        while (arr2[middle] != search && startIndex < stopIndex) {

            //adjust search area
            if (search < arr2[middle]) {
                stopIndex = middle - 1;
            } else if (search > arr2[middle]) {
                startIndex = middle + 1;
            }

            //recalculate middle
            middle = Math.floor((stopIndex + startIndex) / 2);
        }

        //make sure it's the right value
        return (arr2[middle] = search) ? middle : -1;

    },
    /****************Create an Array******************************/
    createArray(num) {
        var arr = [];
        for (let index = 0; index < num; index++)
            arr[index] = rl.question("Enter the element:");
        return arr;
    },
    /******************Merge Sort for Integer************************************* */
    mergesort(arr) {
        if (arr.length === 1) {
            return arr;
        }
        const m = Math.floor(arr.length / 2);
        const left = arr.slice(0, m);
        const right = arr.slice(m);
        return this.merge(this.mergesort(left), this.mergesort(right));

    },

    merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    },


    findNumber(low, high) {
        var mid = low + Math.floor((high - low) / 2)
        console.log(mid)
        if (low < high) {
            if (low == high - 1) {
                var c = rl.question("Is the number " + low + " if yes, press 'Y'. Else Press 'N' : ")
                if (c == 'y')
                    return low;
                if (c == 'n')
                    return high;
            }
            c = rl.question("Is the number " + mid + - +high + " if yes, press 'Y'. Else Press 'N' : ")
            if (c == 'y')
                mid = this.findNumber(mid, high)
            if (c == 'n')
                mid = this.findNumber(low, mid - 1)
        }
        return mid;
    },
    fileCall(path) {
        var fileStream = require('fs');
        var f = fileStream.readFileSync(path, 'utf8');
        var arr = f.split(' ');
        return arr;
    },

    writeFile(filename, Data) {
        const fs = require('fs')
        fs.writeFile(filename, Data, function(err) {
            if (err) {
                return console.log(err);
            }

        });
    },
    /********************Vending Machine**************************************/
    vendingMachine(amount, i, notes) {
        var arr = [1000, 500, 100, 50, 10, 5, 2, 1];
        if (amount == 0 && i == arr.length) {
            console.log("Total number of notes ", notes);
            return;
        }
        if (Math.floor(amount / arr[i]) > 0) {
            console.log(arr[i] + " notes is " + Math.floor(amount / arr[i]));
            notes = notes + Math.floor(amount / arr[i]);
            amount = amount % arr[i];
            this.vendingMachine(amount, i + 1, notes);
            return;
        }
        this.vendingMachine(amount, i + 1, notes);
    },
    /****************Diplay day from given date***********************/
    dayOfWeek(d, m, y) {
        var year = y - Math.floor((14 - m) / 12);
        var x = year + Math.floor((year / 4)) - Math.floor((year / 100)) + Math.floor((year / 400));
        month = m + 12 * Math.floor((14 - m) / 12) - 2;
        var day = (d + x + Math.floor((31 * month) / 12)) % 7;
        return day;
    },
    /***********************Temperature Conversion**************************************** */
    temperature(num, i) {
        var c, f;
        if (i == 1) {
            c = ((f - 32) * 5) / 9;
            console.log("temperature in Celsius = " + Number(c));
        }
        if (i == 2) {
            f = (num * 9 / 5) + 32;
            console.log("temperature in Celsius = " + Number(f));
        }
    },
    /*****************Find Monthly Payment from given Formula***************************** */
    monthlyPayment(p, y, r) {
        var n = 12 * y;
        var r1 = r / (12 * 100);
        var res = (p * r1) / (1 - Math.pow(1 + r1, (-n)));
        console.log("Payment is : " + res);
    },

    /********************compute the square root of a nonnegative******************************* */
    sqrt(t, epsilon, c) {
        // repeatedly apply Newton update step until desired precision is achieved
        while (Math.abs(t - c / t) > epsilon * t) {
            t = (c / t + t) / 2.0;
        }

        // print out the estimate of the square root of c
        console.log(t);

    },

    /********Convert Decimal to Binary & decompose number into a sum of powers of 2.*********** */
    tobinary(num) {
        var str = num.toString();
        var bin = (+str).toString(2);
        var s = " ";
        console.log(bin);
        var j = bin.length - 1;
        console.log(j);
        for (let i = 0; i < bin.length; i++) {
            var res = Math.floor(Math.pow(2, j));

            if (bin[i] == 1) {
                s = s + res + "+";
                bin.length--;
                j--;
            } else {
                s = "" + s;
                bin.length--;
                j--;
            }

        }
        console.log(num + " = " + s);

    },
    /**************Convert decimal to binary & swap nibbles****************/
    tobinary2(num) {
        var str = num.toString();
        var bin = (+str).toString(2);
        var s = " ";
        console.log(bin);
        let fb = bin.slice(0, 4);
        let lb = bin.slice(4);
        let newbin = lb + fb;
        console.log(newbin);
        var digit = parseInt(newbin, 2);
        console.log(digit);
    },




}