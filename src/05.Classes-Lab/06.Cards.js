(() => {
    let Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    };
    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }

        get face(){
            return this._face;
        }
        set face(face){
            if(!faces.includes(face)){
                throw  new Error();
            }

            this._face = face;
        }

        get suit(){
            return this._suit;
        }
        set suit(suit){
            if(Suits.SPADES !== suit && Suits.CLUBS !== suit && Suits.DIAMONDS !== suit && Suits.HEARTS !== suit){
                throw new Error();
            }
            this._suit = suit;
        }
    }

    return {
        Suits:Suits,
        Card:Card
    };
})();
