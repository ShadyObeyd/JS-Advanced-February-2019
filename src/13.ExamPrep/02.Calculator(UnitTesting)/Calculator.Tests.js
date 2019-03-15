const Calculator = require('../02.Calculator(UnitTesting)/Calculator');
const assert = require('chai').assert;

describe('Calculator', function () {
    let calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    it('expenses variable is an empty array', function () {
        assert(calculator.expenses.length === 0);
    });

    it('adds items of any type', function () {
        calculator.add(10);
        calculator.add({name: 'pesho'});
        calculator.add('Lorem');
        calculator.add([1, 2, 3, 'ese']);

        assert(calculator.expenses.length === 4);
    });

    it('divides positive numbers of the array', function () {
        calculator.add(16);
        calculator.add(4);
        calculator.add(2);
        calculator.add('Pesho');
        calculator.add('Gosho');
        assert(calculator.divideNums() === 2);
    });

    it('throws error if there are no numbers in the array', function () {
        calculator.add('Pesho');
        calculator.add('Gosho');

        assert.throws(() => calculator.divideNums(), Error, 'There are no numbers in the array!');
    });

    it('returns correct message if collection contains 0', function () {
        calculator.add(16);
        calculator.add(4);
        calculator.add(2);
        calculator.add(0);

        assert(calculator.divideNums() === 'Cannot divide by zero');
    });

    it('returns numbers correctly', function () {
        assert(calculator.toString() === 'empty array');
    });

    it('sorts numbers correctly', function () {
        calculator.add(10);
        calculator.add(8.5);
        calculator.add(2);
        calculator.add(-15);

        let expectedResult = '-15, 2, 8.5, 10';
    });

    it('sorts strings correctly', function () {
        calculator.add(10);
        calculator.add(8.5);
        calculator.add(2);
        calculator.add(-15);

        let expectedResult = '-15, 2, 8.5, 10';

        assert(calculator.orderBy() === expectedResult);
    });
});