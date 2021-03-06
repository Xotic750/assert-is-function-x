import noop from 'lodash/noop';
import assertIsFunction from '../src/assert-is-function-x';

const hasSymbolSupport = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolSupportIt = hasSymbolSupport ? it : xit;

describe('assertIsFunction', function() {
  it('primitives should throw a TypeError', function() {
    expect.assertions(11);
    const block = function(value) {
      try {
        assertIsFunction(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(expect.any(TypeError));
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
    expect.assertions(9);
    const block = function(value) {
      try {
        assertIsFunction(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(expect.any(TypeError));
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
    expect.assertions(3);
    const block = function(value) {
      try {
        assertIsFunction(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(expect.any(TypeError));
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
    expect.assertions(3);
    const block = function(value) {
      try {
        assertIsFunction(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(expect.any(TypeError));
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
    expect.assertions(1);
    const block = function(value) {
      try {
        return assertIsFunction(value);
      } catch (ignore) {
        // empty
      }

      return false;
    };

    const values = [noop, Array, block, assertIsFunction];
    const expected = values.map(function(x) {
      return x;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });
});
