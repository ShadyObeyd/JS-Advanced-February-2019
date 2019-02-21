let lookupChar = require('../03.CharLookup');
let assert = require('chai').assert;

describe("lookup char returns correct output depending on input data", function () {
    it('returns undefined if string is not a valid input', function () {
        let result = lookupChar(['Pesho', 'Ivan'], 0);

        assert(result === undefined);
    });

    it('returns undefined if index is not a valid input', function () {
        let result = lookupChar('Pesho', {X: 23});

        assert(result === undefined);
    });

    it('returns undefined if index is a floating point number', function () {
        let result = lookupChar('Pesho', 1.25);

        assert(result === undefined);
    });

    it('returns "Incorrect index" if index is less than zero', function () {
        let result = lookupChar('pesho', -1);

        assert(result === 'Incorrect index');
    });

    it('returns "Incorrect index" if index is equal to string length', function () {
        let result = lookupChar('pesho', 5);

        assert(result === 'Incorrect index');
    });

    it('returns "Incorrect index" if index is higher than string length', function () {
        let result = lookupChar('pesho', 6);

        assert(result === 'Incorrect index');
    });

    it('returns "Incorrect index" if string is empty', function () {
        let result = lookupChar('', 0);

        assert(result === 'Incorrect index');
    });

    it('returns the correct char for valid input', function () {
        let result = lookupChar('pesho', 3);

        assert(result === 'h');
    });
});