function solve(cards) {

    function makeCard(cardFace, cardSuit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        let validSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        if(!validFaces.includes(cardFace) || !validSuits[cardSuit]){
            throw  new Error(`Invalid card: ${cardFace}${cardSuit}`);
        }

        return {
            face: cardFace,
            suit: validSuits[cardSuit],
            toString: function () {
                return this.face + this.suit
            }
        };
    }

    try{
        console.log(cards.map(c => {
            let tokens = c.split('');
            let suit = tokens.pop();
            let face = tokens.join('');
            return makeCard(face, suit);
        }).join(' '));
    }
    catch (e) {
        console.log(e.message);
    }
}

solve(['5S', '3D', 'QD', '1C']);