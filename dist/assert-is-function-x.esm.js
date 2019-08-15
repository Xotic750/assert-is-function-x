import isFunction from 'is-function-x';
import safeToString from 'to-string-symbols-supported-x';
import isPrimitive from 'is-primitive-x';
/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @param {string} [message] - An alternative user message.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

var assertIsFunction = function assertIsFunction(callback, message) {
  if (isFunction(callback) === false) {
    var msg = arguments.length > 1 ? safeToString(message) : "".concat(isPrimitive(callback) ? safeToString(callback) : '#<Object>', " is not a function");
    throw new TypeError(msg);
  }

  return callback;
};

export default assertIsFunction;

//# sourceMappingURL=assert-is-function-x.esm.js.map