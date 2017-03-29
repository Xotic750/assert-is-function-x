/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/assert-is-function-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/assert-is-function-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/assert-is-function-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/assert-is-function-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/assert-is-function-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/assert-is-function-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/assert-is-function-x" title="npm version">
 * <img src="https://badge.fury.io/js/assert-is-function-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * If isFunction(callbackfn) is false, throw a TypeError exception.
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module assert-is-function-x
 */

/* eslint strict: 1 */

/* global require, module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var isFunction = require('is-function-x');
  var safeToString = require('safe-to-string-x');
  var isPrimitive = require('is-primitive');

  /**
   * Tests `callback` to see if it is a function, throws a `TypeError` if it is
   * not. Otherwise returns the `callback`.
   *
   * @param {*} callback The argument to be tested.
   * @throws {TypeError} Throws if `callback` is not a function.
   * @return {*} Returns `callback` if it is function.
   * @example
   * var assertIsFunction = require('assert-is-function-x');
   * var primitive = true;
   * var mySymbol = Symbol('mySymbol');
   * var symObj = Object(mySymbol);
   * var object = {};
   * function fn () {}
   *
   * assertIsFunction(primitive);
   *    // TypeError 'true is not a function'.
   * assertIsFunction(object);
   *    // TypeError '#<Object> is not a function'.
   * assertIsFunction(mySymbol);
   *    // TypeError 'Symbol(mySymbol) is not a function'.
   * assertIsFunction(symObj);
   *    // TypeError '#<Object> is not a function'.
   * assertIsFunction(fn);
   *    // Returns fn.
   */
  module.exports = function assertIsFunction(callback) {
    if (!isFunction(callback)) {
      var msg = isPrimitive(callback) ? safeToString(callback) : '#<Object>';
      throw new TypeError(msg + ' is not a function');
    }
    return callback;
  };
}());
