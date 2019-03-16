/**********************************************************************************************************
 * Execution        :   1. default node          : cmd> node Cardextend.js
 *                      
 * 
 *  @purpose        :program to create a Player Object having Deck of Cards, and having ability to 
 *                   Sort by Rank and maintain the cards in a Queue implemented using Linked List. 
 *  @description    :to initialize deck of cards having suit ("Clubs","Diamonds", "Hearts", "Spades") &
 *                   Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace"). 
 *  @file           :Cardextend.js
 *  @overview       :Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and
 *                   Print the Cards the received by the 4 Players. 
 *  @author         :Laxman Pole<polelaxman001@gmail.com>
 *  @version        :  1.0
 *  @since          :  13-03-2019
 ***********************************************************************************************************/

var u = require('./Utility');
var read = require('readline-sync');

function Cards() {
    var Suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    var Rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    var Deck = [];
    for (let i = 0; i < Suits.length; i++) {
        for (let j = 0; j < Rank.length; j++) {
            Deck.push(Rank[j] + "-" + Suits[i]);
        }
    }
    // for (let k = 0; Deck.length; k++) {
    //     console.log(Deck[k]);
    // }
    u.ShuffleCards(Deck);
}
Cards();