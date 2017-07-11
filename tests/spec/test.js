'use strict';

var hasSymbolSupport = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifSymbolSupportIt = hasSymbolSupport ? it : xit;
var assertIsFunction;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  assertIsFunction = require('../../index.js');
} else {
  assertIsFunction = returnExports;
}

describe('assertIsFunction', function () {
  it('primitives should throw a TypeError', function () {
    var block = function (value) {
      try {
        assertIsFunction(value);
        return false;
      } catch (e) {
        expect(e).toEqual(jasmine.any(TypeError));
        expect(e.message).toBe(String(value) + ' is not a function');
      }
      return true;
    };
    var values = [
      undefined,
      null,
      1,
      true,
      ''
    ];
    var expected = values.map(function () {
      return true;
    });
    var actual = values.map(block);
    expect(actual).toEqual(expected);
  });

  it('objects should throw a TypeError', function () {
    var block = function (value) {
      try {
        assertIsFunction(value);
        return false;
      } catch (e) {
        expect(e).toEqual(jasmine.any(TypeError));
        expect(e.message).toBe('#<Object> is not a function');
      }
      return true;
    };
    var values = [
      [],
      {},
      /r/,
      new Date()
    ];
    var expected = values.map(function () {
      return true;
    });
    var actual = values.map(block);
    expect(actual).toEqual(expected);
  });

  ifSymbolSupportIt('Symbol literals should throw a TypeError', function () {
    var block = function (value) {
      try {
        assertIsFunction(value);
        return false;
      } catch (e) {
        expect(e).toEqual(jasmine.any(TypeError));
        expect(e.message).toBe('Symbol(mySymbol) is not a function');
      }
      return true;
    };
    var values = [Symbol('mySymbol')];
    var expected = values.map(function () {
      return true;
    });
    var actual = values.map(block);
    expect(actual).toEqual(expected);
  });

  ifSymbolSupportIt('Symbol objects should throw a TypeError', function () {
    var block = function (value) {
      try {
        assertIsFunction(value);
        return false;
      } catch (e) {
        expect(e).toEqual(jasmine.any(TypeError));
        expect(e.message).toBe('#<Object> is not a function');
      }
      return true;
    };
    var values = [Object(Symbol('mySymbol'))];
    var expected = values.map(function () {
      return true;
    });
    var actual = values.map(block);
    expect(actual).toEqual(expected);
  });

  it('should return the function', function () {
    var block = function (value) {
      try {
        return assertIsFunction(value);
      } catch (ignore) {}
      return false;
    };
    var values = [
      function () {},
      Array,
      block,
      assertIsFunction
    ];
    var expected = values.map(function (x) {
      return x;
    });
    var actual = values.map(block);
    expect(actual).toEqual(expected);
  });
});
