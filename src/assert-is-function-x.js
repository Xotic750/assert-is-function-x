import isFunction from 'is-function-x';
import safeToString from 'to-string-symbols-supported-x';
import isPrimitive from 'is-primitive';

/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */
const assertIsFunction = function assertIsFunction(callback) {
  if (isFunction(callback) === false) {
    const msg = isPrimitive(callback) ? safeToString(callback) : '#<Object>';
    throw new TypeError(`${msg} is not a function`);
  }

  return callback;
};

export default assertIsFunction;
