function solve(cardFace, cardSuit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let validSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    if(!validFaces.includes(cardFace) || !validSuits[cardSuit]){
        throw new Error();
    }

    return {
        face: cardFace,
        suit: validSuits[cardSuit],
        toString: function () {
            return this.face + this.suit
        }
    };
}

console.log(solve('A', 'S').toString());