/**********************************************************************************************************
 * Execution        :   1. default node          : cmd> node DeckOfCards.js
 *                      
 * 
 *  @purpose        :Write a program to Shuffle the cards and then distribute 9 Cards to 4 Players 
 *                   and Print the Cards the received by the 4 Players using 2D Array. 
 *  @description    :To initialize deck of cards having suit ("Clubs","Diamonds", "Hearts", "Spades") &
 *                   Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace"). 
 *  @file           :DeckOfCards.js
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
            Deck.push(Suits[i] + "-" + Rank[j]);
        }
    }
    u.Shuffle(Deck)
}
Cards();