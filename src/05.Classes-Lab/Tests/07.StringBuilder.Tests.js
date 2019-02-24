const StringBuilder = require('../07.StringBuilder');
const assert = require('chai').assert;

// Can't pass the 5th test - only 90/100...

describe('StringBuilder', function () {
    let sb;
    beforeEach(function () {
        sb = new StringBuilder();
    });

    describe('constructor', function () {
        it('can be instantiated without parameter', function () {
            assert(sb.toString() === '');
        });

        it('can be instantiated with parameter', function () {
            sb = new StringBuilder('Pesho');

            assert(sb.toString() === 'Pesho');
        });

        it('throws Type Error if param is not string', function () {
            assert.throws(() => new StringBuilder(55), TypeError, 'Argument must be string');
        });
    });

    describe('append', function () {
        it('throws Type Error if passed argument is not string', function () {
            assert.throws(() => sb.append(55), TypeError, 'Argument must be string');
        });

        it('appends string to end of string array', function () {
            sb.append('Hello');

            assert(sb.toString() === 'Hello');
        });
    });

    describe('prepend', function () {
        it('throws Type Error if passed argument is not string', function () {
            assert.throws(() => sb.prepend(55), TypeError, 'Argument must be string');
        });

        it('appends a valid string param to the beginning of the string array', function () {
            sb.append(', Pesho!');
            sb.prepend('Hello');

            assert(sb.toString() === 'Hello, Pesho!');
        });
    });

    describe('insertAt', function () {
        it('throws Type Error if passed argument is not string', function () {
            assert.throws(() => sb.insertAt(55, 0), TypeError, 'Argument must be string');
        });

        it('works correctly with valid data', function () {
            sb.append('Aah,  Kenobi!');
            sb.insertAt('general', 5);

            assert(sb.toString() === 'Aah, general Kenobi!');
        });
    });

    describe('remove', function () {
        it('removes portion of the string, starting at given index and ending at given length', function () {
            sb.append('Hello there');
            sb.remove(6, 5);

            assert(sb.toString() === 'Hello ');
        });
    });

    describe('verifyParam', function () {
        it('throws TypeError if passed param is not string', function () {
            assert.throws(() => StringBuilder._vrfyParam(['Pesho', 'Gosho']), TypeError, 'Argument must be string');
        });
    });
});