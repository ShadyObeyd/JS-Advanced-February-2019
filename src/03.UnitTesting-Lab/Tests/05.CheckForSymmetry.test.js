let assert = require('chai').assert;
let isSymmetric = require('../05.CheckForSymmetry');

describe('function checks for symmetry', function () {
    it('returns false if input is not array', function () {
        let testData = 'pesho';

        let result = isSymmetric(testData);

        assert(result === false);
    });

    it('returns true if array is symmetric and numeric', function () {
       let testArr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
       let result = isSymmetric(testArr);

       assert(result === true);
    });

    it('returns true if array is symmetric and with strings', function () {
        let testArr = ['pesho', 'gosho', 'ivan', 'gosho', 'pesho'];
        let result = isSymmetric(testArr);

        assert(result === true);
    });

    it('returns false if array is not symmetric', function () {
        let testArr = [1, 2, 3, 4, 5];

        let result = isSymmetric(testArr);

        assert(result === false);
    });

    it('returns true if array is empty', function () {
        let result = isSymmetric([]);

        assert(result === true);
    });

    it('returns true if array has one element', function () {
        let result = isSymmetric([1]);

        assert(result === true);
    });

    it('returns false if array is not reversed', function () {
        let testArr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    });

    it('returns true for symmetric array of different types of elements', function () {
        let testArr = [3,'pesho',{X: 5},new Date(),{X: 5},'pesho',3];

        let result = isSymmetric(testArr);

        assert(result === true);
    });
});