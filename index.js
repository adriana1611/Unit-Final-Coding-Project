//For the final project you will be creating an automated version of the classic card game WAR! 
//You do not need to do anything special when there is a tie in a round.

class Card {
    constructor(face,cardSuit,rank){
        this.face = face;
        this.cardSuit = cardSuit;
        this.rank =rank;
    }

}

class Player {
    constructor(name) {
        this.name =name;
        this.points = 0;
    }
}

class Game {
    constructor(){
        this.deck =[];
        this.player1 = new Player('Amy');
        this.player2 = new Player('Ron');
    }


    startGame() {
        this.makeDeck();
    }


    makeDeck(){
        let deck =[];
        let values =[2,3,4,5,6,7,8,9,10,'J','Q','K','A']
    let cardSuits =['🗡️','❤️','💎','🍀']

    for(let x=0; x <values.length;x++) {
        for(let suit of cardSuits){
        deck.push(new Card(values[x],suit, x+2))
    }
}


//shuffle cards fromhttps://www.geeksforgeeks.org/javascript-program-to-shuffle-deck-of-cards/ 

    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
        }



    }
}

let game = new Game();
console.log(game)
