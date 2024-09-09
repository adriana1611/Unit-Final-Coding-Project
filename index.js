//automated version of the classic card game WAR! 


//this represents a single card in the deck.(face,suit,rank)
class Card {
    constructor(face,cardSuit,rank){
        this.face = face;
        this.cardSuit = cardSuit;
        this.rank =rank;
    }

}

//represents a player in the game 
class Player {
    constructor() { 
        this.points = 0; // initally set to 0
        this.hand = []; // to hold player's cards
    }
}

//manages the game including creating the deck, shuffling it, dealing cards, & playing the game. 
class Game {
    constructor(){
        this.deck =[];
        this.player1 = new Player
        this.player2 = new Player
        this.makeDeck(); // calls this.makeDeck() to create and prepare the deck
    }



   //Creates a standard deck of 52 cards
    makeDeck(){
        let values =[2,3,4,5,6,7,8,9,10,'J','Q','K','A']
        let cardSuits =['🗡️','❤️','💎','🍀']

    for(let x = 0; x <values.length; x++) {
        for(let suit of cardSuits){
        this.deck.push(new Card(values[x],suit, x + 2))
    }
}


//shuffle the deck from https://www.geeksforgeeks.org/javascript-program-to-shuffle-deck-of-cards/ 

    for (let i = this.deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }


        //deals card back to players (assigns 26 to each player)
        this.player1.hand = this.deck.splice(0,26)
        this.player2.hand = this.deck.splice(0,26)


    }

    //loops through each of the 26 rounds & for each round it retrieves the top card from each player's hand
    playWar() {
        for (let x = 0; x < 26; x ++ ) {
          let p1Card =this.player1.hand[x]
          let p2Card = this.player2.hand[x]

          console.log(`Player 1 plays ${p1Card.face} of ${p1Card.cardSuit}`);
          console.log(`Player 2 plays ${p2Card.face} of ${p2Card.cardSuit}`);

            //compares the cards
          let result = this.compareCards(p1Card,p2Card);
          console.log(result);
       
        }

       //Final Score 
       console.log(`Final Scores - Player 1: ${this.player1.points}, Player 2: ${this.player2.points}`);
       if (this.player1.points > this.player2.points) {
        console.log('Player 1 wins the game!');
    } else if (this.player1.points < this.player2.points) {
        console.log('Player 2 wins the game!');
    } else {
        console.log('The game is a tie!');
    }


        
    }
   

    //compares 2 cards and determines the winner of a round. 
    compareCards(card1, card2) {

        const value1 = card1.rank;
        const value2 = card2.rank;

        // points are awarded to the player with the higher card

        if(value1 > value2){
             this.player1.points += 1 ;
             return 'Player 1 wins this round!';

        }else if (value1 < value2) {
            this.player2.points += 1 ;
            return 'Player 2 wins this round!';
        }else {
            return 'Its a tie!';

        }
 
        }

       
}

let game = new Game();

 game.playWar();
 
 
