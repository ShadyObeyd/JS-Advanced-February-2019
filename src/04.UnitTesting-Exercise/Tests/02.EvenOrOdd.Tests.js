let isOddOrEven = require('../02.EvenOrOdd');
let assert = require('chai').assert;

describe('isOddOrEven returns odd or even according to input string length', function () {
    it('returns odd if input string length is odd', function () {
        let result = isOddOrEven('pesho');

        assert(result === 'odd');
    });

    it('returns even if input string length is even', function () {
        let result = isOddOrEven('123456');

        assert(result === 'even');
    });

    it('returns undefined if input is not string', function () {
       let result = isOddOrEven(['pesho', 'gosho']);

       assert(result === undefined);
    });
});