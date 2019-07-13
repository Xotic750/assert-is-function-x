const hasSymbolSupport = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolSupportIt = hasSymbolSupport ? it : xit;
let assertIsFunction;

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

describe('assertIsFunction', function() {
  it('primitives should throw a TypeError', function() {
    const block = function(value) {
      try {
        assertIsFunction(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(jasmine.any(TypeError));
        expect(e.message).toBe(`${String(value)} is not a function`);
      }

      return true;
    };

    const values = [undefined, null, 1, true, ''];
    const expected = values.map(function() {
      return true;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });

  it('objects should throw a TypeError', function() {
    const block = function(value) {
      try {
        assertIsFunction(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(jasmine.any(TypeError));
        expect(e.message).toBe('#<Object> is not a function');
      }

      return true;
    };

    const values = [[], {}, /r/, new Date()];
    const expected = values.map(function() {
      return true;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });

  ifSymbolSupportIt('Symbol literals should throw a TypeError', function() {
    const block = function(value) {
      try {
        assertIsFunction(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(jasmine.any(TypeError));
        expect(e.message).toBe('Symbol(mySymbol) is not a function');
      }

      return true;
    };

    const values = [Symbol('mySymbol')];
    const expected = values.map(function() {
      return true;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });

  ifSymbolSupportIt('Symbol objects should throw a TypeError', function() {
    const block = function(value) {
      try {
        assertIsFunction(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(jasmine.any(TypeError));
        expect(e.message).toBe('#<Object> is not a function');
      }

      return true;
    };

    const values = [Object(Symbol('mySymbol'))];
    const expected = values.map(function() {
      return true;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });

  it('should return the function', function() {
    const block = function(value) {
      try {
        return assertIsFunction(value);
      } catch (ignore) {}

      return false;
    };

    const values = [function() {}, Array, block, assertIsFunction];
    const expected = values.map(function(x) {
      return x;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });
});
