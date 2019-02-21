let mathEnforcer = require('../04.MathEnforcer');
let assert = require('chai').assert;

describe('mathEnforcer', function () {
    describe('addFive()', function () {
       it('returns undefined if parameter is not a number', function () {
           let result = mathEnforcer.addFive('hello');

           assert(result === undefined);
       });

        it('returns correct result if parameter is positive integer', function () {
            let result = mathEnforcer.addFive(5);

            assert(result === 10);
        });

        it('returns correct result if parameter is negative integer', function () {
            let result = mathEnforcer.addFive(-6);

            assert(result === -1);
        });

        it('returns correct result if parameter is positive floating-point number', function () {
            let result = mathEnforcer.addFive(5.65);

            assert(result === 10.65);
        });

        it('returns correct result if parameter is negative floating-point number', function () {
            let result = mathEnforcer.addFive(-6.25);

            assert(result === -1.25);
        });
    });

    describe('subtractTen()', function () {
        it('returns undefined if parameter is not a number', function () {
            let result = mathEnforcer.subtractTen({greeting: 'hello'});

            assert(result === undefined);
        });

        it('returns correct result if parameter is positive integer', function () {
            let result = mathEnforcer.subtractTen(10);

            assert(result === 0);
        });

        it('returns correct result if parameter is negative integer', function () {
            let result = mathEnforcer.subtractTen(-6);

            assert(result === -16);
        });

        it('returns correct result if parameter is positive floating-point number', function () {
            let result = mathEnforcer.subtractTen(5.65);

            assert(result === -4.35);
        });

        it('returns correct result if parameter is negative floating-point number', function () {
            let result = mathEnforcer.subtractTen(-6.25);

            assert(result === -16.25);
        });
    });

    describe('sum()', function () {
        it('returns undefined if first parameter is not a number', function () {
            let result = mathEnforcer.sum('hello', 4);

            assert(result === undefined);
        });

        it('returns undefined if second parameter is not a number', function () {
            let result = mathEnforcer.sum(5, [1, 2, 3]);

            assert(result === undefined);
        });

        it('returns the correct sum of positive intigers', function () {
            let result = mathEnforcer.sum(5, 6);
            assert(result === 11);
        });

        it('returns the correct sum of negative intigers', function () {
            let result = mathEnforcer.sum(-5, -6);
            assert(result === -11);
        });

        it('returns the correct sum of positive floating-point numbers', function () {
            let result = mathEnforcer.sum(5.25, 6.25);
            assert(result === 11.50);
        });

        it('returns the correct sum of negative floating-point numbers', function () {
            let result = mathEnforcer.sum(-5.25, -6.25);
            assert(result === -11.50);
        });
    });
});