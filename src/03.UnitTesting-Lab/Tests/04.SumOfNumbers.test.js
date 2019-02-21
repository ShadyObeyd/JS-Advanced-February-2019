let assert = require('chai').assert;
let sum = require('../04.SumOfNumbers');

describe('sum(arr) - sum array of numbers', function () {

    it('non number array returns NaN', function () {
        let testData = 'pesho';

        let result = sum(testData);

        assert(isNaN(result));
    });

    it('works correctly with valid input', function () {
        let testArr = [1, 2, 3, 4, 5];

        let result = sum(testArr);

        assert(result === 15);
    });

    it('returns 0 if array is empty', function () {
        let result = sum([]);

        assert(result === 0);
    });

    it('returns NaN if array is not with numbers', function () {
        let testArr = ['pesho', 'Ivan', 'Gosho'];

        let result = sum(testArr);

        assert(isNaN(result));
    });
});