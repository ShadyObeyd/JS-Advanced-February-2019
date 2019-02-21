let rgbToHexColor = require('../06.RGBtoHex');
let assert = require('chai').assert;

describe('RGB to Hex converts red green and blue to hex numbers', function () {
    it('returns undefined if red is outside the range intiger', function () {
        let red = 258;
        let blue = 45;
        let green = 67;

        let result = rgbToHexColor(red, green, blue);

        assert(result === undefined);
    });

    it('returns undefined if green is outside the range intiger', function () {
        let red = 65;
        let blue = 45;
        let green = -33;

        let result = rgbToHexColor(red, green, blue);

        assert(result === undefined);
    });

    it('returns undefined if blue is outside the range intiger', function () {
        let red = 65;
        let blue = -45;
        let green = 33;

        let result = rgbToHexColor(red, green, blue);

        assert(result === undefined);
    });

    it('returns undefined if red is not a valid number', function () {
        let red = 'pesho';
        let blue = 45;
        let green = 33;

        let result = rgbToHexColor(red, green, blue);

        assert(result === undefined);
    });

    it('returns undefined if green is not a valid number', function () {
        let red = 65;
        let blue = 45;
        let green = {X: 33};

        let result = rgbToHexColor(red, green, blue);

        assert(result === undefined);
    });

    it('returns undefined if blue is not a valid number', function () {
        let red = 65;
        let blue = [45, 88, 65];
        let green = 33;

        let result = rgbToHexColor(red, green, blue);

        assert(result === undefined);
    });

    it('returns the numbers as hex if input is valid', function () {
        let red = 65;
        let blue = 88;
        let green = 33;

        let result = rgbToHexColor(red, green, blue);
        let expectedResult = "#" +
            ("0" + red.toString(16).toUpperCase()).slice(-2) +
            ("0" + green.toString(16).toUpperCase()).slice(-2) +
            ("0" + blue.toString(16).toUpperCase()).slice(-2);

        assert(result === expectedResult);
    });

    it('returns valid result if red is 0', function () {
        let red = 0;
        let blue = 45;
        let green = 67;

        let result = rgbToHexColor(red, green, blue);
        let expectedResult = "#" +
            ("0" + red.toString(16).toUpperCase()).slice(-2) +
            ("0" + green.toString(16).toUpperCase()).slice(-2) +
            ("0" + blue.toString(16).toUpperCase()).slice(-2);

        assert(result === expectedResult);
    });

    it('returns valid result if green is 0', function () {
        let red = 65;
        let blue = 45;
        let green = 0;

        let result = rgbToHexColor(red, green, blue);
        let expectedResult = "#" +
            ("0" + red.toString(16).toUpperCase()).slice(-2) +
            ("0" + green.toString(16).toUpperCase()).slice(-2) +
            ("0" + blue.toString(16).toUpperCase()).slice(-2);

        assert(result === expectedResult);
    });

    it('returns valid result if blue is 0', function () {
        let red = 65;
        let blue = 0;
        let green = 33;

        let result = rgbToHexColor(red, green, blue);
        let expectedResult = "#" +
            ("0" + red.toString(16).toUpperCase()).slice(-2) +
            ("0" + green.toString(16).toUpperCase()).slice(-2) +
            ("0" + blue.toString(16).toUpperCase()).slice(-2);

        assert(result === expectedResult);
    });

    it('returns valid result if red is 255', function () {
        let red = 255;
        let blue = 88;
        let green = 33;

        let result = rgbToHexColor(red, green, blue);
        let expectedResult = "#" +
            ("0" + red.toString(16).toUpperCase()).slice(-2) +
            ("0" + green.toString(16).toUpperCase()).slice(-2) +
            ("0" + blue.toString(16).toUpperCase()).slice(-2);

        assert(result === expectedResult);
    });

    it('returns valid result if green is 255', function () {
        let red = 65;
        let blue = 88;
        let green = 255;

        let result = rgbToHexColor(red, green, blue);
        let expectedResult = "#" +
            ("0" + red.toString(16).toUpperCase()).slice(-2) +
            ("0" + green.toString(16).toUpperCase()).slice(-2) +
            ("0" + blue.toString(16).toUpperCase()).slice(-2);

        assert(result === expectedResult);
    });

    it('returns valid result if blue is 255', function () {
        let red = 65;
        let blue = 255;
        let green = 33;

        let result = rgbToHexColor(red, green, blue);
        let expectedResult = "#" +
            ("0" + red.toString(16).toUpperCase()).slice(-2) +
            ("0" + green.toString(16).toUpperCase()).slice(-2) +
            ("0" + blue.toString(16).toUpperCase()).slice(-2);

        assert(result === expectedResult);
    });
});