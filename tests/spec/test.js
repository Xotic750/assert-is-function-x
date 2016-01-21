/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
  maxstatements:11, maxcomplexity:4 */

/*global JSON:true, expect, module, jasmine, require, describe, xit, it,
returnExports */

(function () {
  'use strict';

  var hasSymbolSupport = typeof Symbol === 'function' &&
      typeof Symbol() === 'symbol',
    ifSymbolSupportIt = hasSymbolSupport ? it : xit,
    assertIsFunction;
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
      function block(value) {
        try {
          assertIsFunction(value);
          return false;
        } catch (e) {
          expect(e).toEqual(jasmine.any(TypeError));
          expect(e.message).toBe(String(value) + ' is not a function');
        }
        return true;
      }
      var values = [undefined, null, 1, true, ''],
        expected = values.map(function () {
          return true;
        }),
               actual = values.map(block);
      expect(actual).toEqual(expected);
    });

    it('objects should throw a TypeError', function () {
      function block(value) {
        try {
          assertIsFunction(value);
          return false;
        } catch (e) {
          expect(e).toEqual(jasmine.any(TypeError));
          expect(e.message).toBe('#<Object> is not a function');
        }
        return true;
      }
      var values = [[], {}, /r/, new Date()],
        expected = values.map(function () {
          return true;
        }),
        actual = values.map(block);
      expect(actual).toEqual(expected);
    });

    ifSymbolSupportIt('Symbol literals should throw a TypeError', function () {
      function block(value) {
        try {
          assertIsFunction(value);
          return false;
        } catch (e) {
          expect(e).toEqual(jasmine.any(TypeError));
          expect(e.message).toBe('Symbol(mySymbol) is not a function');
        }
        return true;
      }
      var values = [Symbol('mySymbol')],
        expected = values.map(function () {
          return true;
        }),
        actual = values.map(block);
      expect(actual).toEqual(expected);
    });

    ifSymbolSupportIt('Symbol objects should throw a TypeError', function () {
      function block(value) {
        try {
          assertIsFunction(value);
          return false;
        } catch (e) {
          expect(e).toEqual(jasmine.any(TypeError));
          expect(e.message).toBe('#<Object> is not a function');
        }
        return true;
      }
      var values = [Object(Symbol('mySymbol'))],
        expected = values.map(function () {
          return true;
        }),
        actual = values.map(block);
      expect(actual).toEqual(expected);
    });

    it('should return the function', function () {
      function block(value) {
        try {
          return assertIsFunction(value);
        } catch (ignore) {}
        return false;
      }
      var values = [function () {}, Array, block, assertIsFunction],
        expected = values.map(function (x) {
          return x;
        }),
               actual = values.map(block);
      expect(actual).toEqual(expected);
    });
  });
}());
