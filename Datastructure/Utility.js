var u = require('./Utility');
var rl = require('readline-sync');
var ll = require('./Implementation/linkedlist11')

module.exports = {

    fileCall(path) {
        var fileStream = require('fs');
        var f = fileStream.readFileSync(path, 'utf8');
        var arr = f.split(" ");

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
    array2d(initial, final) {

        var array = [];

        for (let i = 0; i < initial; i++) {
            array[i] = [];

            for (var j = 0; j < cols; j++) {

                array[i][j] = u.primenumber(initial, final);
            }
        }
        var arr = array;
        console.log(arr);



    },
    dayOfWeek(d, m, y) {
        var year = y - Math.floor((14 - m) / 12);
        var x = year + Math.floor((year / 4)) - Math.floor((year / 100)) + Math.floor((year / 400));
        month = m + 12 * Math.floor((14 - m) / 12) - 2;
        var day = (d + x + Math.floor((31 * month) / 12)) % 7;
        return day;
    },
    leapYear(year) {
        var result;
        if (((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0)) {
            result = true;
        } else {
            result = false;
        }
        return result

    },


}