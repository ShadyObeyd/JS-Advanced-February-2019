let createCalculator = require('../07.AddOrSubstract');
let assert = require('chai').assert;

describe('create calculator returns an object with expected functions', function () {
   it('returns an object', function () {
      let result = createCalculator();

      assert(typeof (result) === 'object');
   });

   it('returns object with function "add"', function () {
       let result = createCalculator();

       assert(typeof (result.add) === "function");
   });

   it('returns object with function "subtract"', function () {
      let result = createCalculator();

      assert(typeof (result.subtract) === "function");
   });

   it('returns object with function "get"', function () {
      let result = createCalculator();

      assert(typeof (result.get) === "function");
   });

   it('add takes an int parameter and returns the correct value', function () {
      let result = createCalculator();

      result.add(5);

      assert(result.get() === 5);
   });

   it('add takes a non-parsed int parameter and returns the correct value', function () {
      let result = createCalculator();

      result.add('5');

      assert(result.get() === 5);
   });

   it('subtract takes an int parameter and returns the correct value', function () {
      let result = createCalculator();

      result.subtract(5);

      assert(result.get() === -5);
   });

   it('subtract takes a non-parsed int parameter and returns the correct value', function () {
      let result = createCalculator();

      result.subtract('5');

      assert(result.get() === -5);
   });

   it('add returns Nan if a non-int is passed', function () {
      let result = createCalculator();

      result.add('pesho');

      assert(isNaN(result.get()));
   });

   it('subtract returns Nan if a non-int is passed', function () {
      let result = createCalculator();

      result.subtract([1, 2, 3, 4, 5]);

      assert(isNaN(result.get()));
   });
});