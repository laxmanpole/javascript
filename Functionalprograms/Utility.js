var u = require('./Utility');
var rl = require('readline-sync');
module.exports = {
    /********************Replace String*************************************************/
    replace(str1, str2, str3) {
        var str4 = str1.replace(str2, str3);
        console.log(str4);

    },
    /*******************Leapyear********************************************************/
    leapYear(year) {
        var result;
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
            result = true;
        } else {
            result = false;
        }
        return result

    },
    /*************************Harmonic Number******************************************* */
    harmonicNumber(n) {
        var result = 0;
        while (n > 0) {
            result += 1 / n;
            n--
        }
        return result;

    },
    /***********************Flip Coin********************************************* */
    coinFlip(n) {
        var loopcount = 0;
        var Heads, Tails;
        var tailcount = 0;
        var headcount = 0;
        while (n > loopcount) {
            result = Math.random();
            if (result < 0.5) {
                tailcount++;
            } else {
                headcount++;
            }
            loopcount = loopcount + 1;

        }
        heads = headcount / n * 100;
        tails = tailcount / n * 100;
        console.log("Percentage of heads: " + heads + "%");
        console.log("Percentage of tails: " + tails + "%");



    },
    /**********************Power of two*************************************************** */
    powerof2(n) {
        var i = 0;
        var power = 1;
        if (n > 31) {
            console.log("value of number should be less than 31");

        } else {
            console.log("Powers of 2 that are less than 2^" + n);
            while (i <= n) {
                console.log("2^" + i + " = " + power);
                power = power * 2;
                i++;

            }

        }


    },
    /*********************Prime Factorization************************************************ */
    primefactor(num) {
        console.log("Prime Factor is:");
        for (let i = 2; i < num; i++) {
            while (num % i == 0) {
                console.log(i + " ");
                num = num / i;
            }
        }
        if (num > 2) {
            console.log(num);
        }

    },
    /********************Roots of Number************************************************ */
    quadratic(a, b, c) {

        var secondRoot = 0;
        var firstRoot = 0;
        var delta = (b * b) - (4 * a * c);
        var sqrt = Math.sqrt(delta);

        if (delta > 0) {
            firstRoot = (-b + sqrt) / (2 * a);
            secondRoot = (-b - sqrt) / (2 * a);
            console.log(firstRoot);
            console.log(secondRoot);
        } else if (delta == 0) {
            console.log("Root is : " + (-b + sqrt) / (2 * a));
        } else {
            var realpart = -b / (2 * a);
            var imaginarypart = Math.sqrt(-delta) / (2 * a);
            console.log("firstRoot=%.2f+%.2fi and secondRoot=%.2f-%.2fi", realpart,
                imaginarypart);
        }


    },
    /*****************String Permutation************************************************ */
    permutation(string) {
        var results = [];
        console.log("Now a String:" + string)
        console.log("String length:" + string.length)


        if (string.length === 1) {
            results.push(string);
            return results;
        }

        for (var i = 0; i < string.length; i++) {
            var firstChar = string[i];
            console.log("Now First char:" + firstChar)
            var otherChar = string.substring(0, i) + string.substring(i + 1);
            console.log("now other char:" + otherChar)
            var otherPermutations = this.permutation(otherChar);

            for (var j = 0; j < otherPermutations.length; j++) {
                results.push(firstChar + otherPermutations[j]);
                console.log("char in array:" + results)
            }
        }
        return results;




    },
    /**********************Distance********************************************* */
    distance(x, y) {
        var dist = Math.sqrt(x * x + y * y);

        // output distance
        console.log("distance from (" + x + ", " + y + ") to (0, 0) = " + dist);
    },
    /***********************Gambler******************************************************* */
    gambler(stake, goal, number) {
        var win = 0,
            loss = 0;
        for (let i = 0; i <= goal; i++) {
            while (stake > 0 && stake < number && goal > 0) {
                if (Math.random() < 0.5) {
                    stake++;
                    win++;
                    goal--;
                } else {
                    stake--;
                    loss++;
                    goal--;
                }
            }
        }
        var perwin = (win * 100) / (win + loss)
        var perloss = (loss * 100) / (win + loss);

        console.log("The gambler is won : " + win);
        console.log("The gambler is loss : " + loss);
        console.log("Win percentage is : " + perwin + " %");
        console.log("Loss percentage is : " + perloss + " %");
    },
    /****************************Coupen*************************************************** */
    generatecoupon(number) {
        var ar = [];
        for (var i = 0; i < number; i++) {
            ar[i] = Math.floor(Math.random() * number);
            for (var j = 0; j < i; j++) {
                if (ar[i] == ar[j]) {
                    i--;
                }
            }
        }
        console.log(ar);
    },
    /****************************Windchill****************************************** */

    windchill(t, v) {
        if (t > Math.abs(50) && v > Math.abs(120)) {
            console.log("Formula is not valid");
        } else {
            var w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            console.log("Temperature = " + t);
            console.log("Wind speed  = " + v);
            console.log("Wind chill  = " + w);
        }

    },
    /********************Stopwatch************************************************* */
    stopwatch(num) {
        var u = require('./Utility');
        var Start, Stop, Elapsed;
        var Sum = 0;
        Start = u.StartTime();
        for (let i = 1; i <= num; i++) {
            Sum = Sum + i;
            console.log("Sum: " + Sum + " ");
        }

        Stop = u.StopTime();
        Elapsed = (Stop - Start) / 1000.0;
        console.log("");
        console.log("Total time elapsed during computation: " + Elapsed);
    },
    StartTime() {
        var start = new Date().getTime();
        return start;
    },
    StopTime() {
        var stop = new Date().getTime();
        return stop;
    },
    array2d(rows, cols) {

        var array = [];

        for (let i = 0; i < rows; i++) {
            array[i] = [];

            for (var j = 0; j < cols; j++) {

                array[i][j] = rl.question("Enter element at " + i + " " + j + " position: ");
            }
        }
        var arr = array;
        console.log(arr);



    },
    /********************Sum of zero******************************************************* */
    sumofzero(MinValue, MaxValue) {
        var Count = 0;
        var Array = [Math.abs(MaxValue) + Math.abs(MinValue)]

        for (var i = 0; i < Array.length; i++) {
            Array[i] = MinValue + (Math.random() * ((MaxValue - MinValue) + 1));
            var arr = Array[i];
            console.log(arr + "\t");
        }


        // COMPUTATION
        for (let i = 0; i < arr.length - 2; i++) {
            for (let j = i + 1; j < arr.length - 1; j++) {
                for (let k = j + 1; k < arr.length; k++) {

                    if (arr[i] + arr[j] + arr[k] == 0) {
                        Count++;
                        console.log("Triplet is: " + " " + arr[i] + " " + arr[j] + " " + arr[k]);
                    }
                }
            }
        }
        console.log("Total no. of triplets is: " + Count);

    },
    /*******************TicTacToe game****************************************** */

    intializeGame() {
        var game = [];
        for (let i = 0; i <= 2; i++) {
            game.push([]);
            for (let j = 0; j <= 2; j++)
                game[i][j] = '-';
        }
        return game;
    },
    //computer side playing
    computerPlayer(game) {
        var arr;
        var flag = false;
        while (flag == false) {
            var x = this.random();
            var y = this.random();
            if (game[x][y] == '-') {
                arr = this.mark(game, x, y, 'O');
                flag = true;
            }
        }
        return game;
    },


    // random function generate 0,1,2
    random() {
        var value = Math.floor(Math.random() * 3);
        console.log(value + 1);
        return value;
    },
    // mark the values for game
    mark(game, x, y, value) {
        if (game[x][y] == '-')
            game[x][y] = value;
        for (let i = 0; i <= 2; i++) {
            var print = [];
            for (let j = 0; j <= 2; j++)
                print[j] = game[i][j];
            console.log(print);
        }
        return game;
    },


    // user side playing
    userPlayer(game) {
        var flag = false;
        while (flag == false) {
            console.log("Enter the value:");
            let x = rl.question('Enter the value of row within 1,2,3 : ') - 1;
            let y = rl.question('Enter the value of column within 1,2,3 : ') - 1;
            if (game[x][y] == '-') {
                this.mark(game, x, y, 'X');
                flag = true;
            } else
                console.log("Please enter the correct choice");
        }
        return game;
    },
    //check the entered number assigning correct place or not
    check(game) {
        for (let i = 0; i <= 2; i++) {
            if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) {
                if (game[i][0] == 'O' || game[i][0] == 'X') {
                    return true;
                }
            }
            if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) {
                if (game[0][i] == 'O' || game[0][i] == 'X') {
                    return true;
                }
            }
        }
        var k = 0,
            l = 0;
        if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) {
            if (game[0][0] == 'O' || game[0][0] == 'X') {
                return true;
            }
        }
        if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) {
            if (game[0][0] == 'O' || game[0][0] == 'X') {
                return true;
            }
        }
        return false;
    },




}