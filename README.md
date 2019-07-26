<a
  href="https://travis-ci.org/Xotic750/assert-is-function-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/assert-is-function-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/assert-is-function-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/assert-is-function-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/assert-is-function-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/assert-is-function-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/assert-is-function-x"
  title="npm version">
<img src="https://badge.fury.io/js/assert-is-function-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/assert-is-function-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/assert-is-function-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/assert-is-function-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/assert-is-function-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_assert-is-function-x"></a>

## assert-is-function-x

If isFunction(callbackfn) is false, throw a TypeError exception.

<a name="exp_module_assert-is-function-x--module.exports"></a>

### `module.exports(callback)` ⇒ <code>\*</code> ⏏

Tests `callback` to see if it is a function, throws a `TypeError` if it is
not. Otherwise returns the `callback`.

**Kind**: Exported function  
**Returns**: <code>\*</code> - Returns `callback` if it is function.  
**Throws**:

- <code>TypeError</code> Throws if `callback` is not a function.

| Param    | Type            | Description                |
| -------- | --------------- | -------------------------- |
| callback | <code>\*</code> | The argument to be tested. |

**Example**

```js
import assertIsFunction from 'assert-is-function-x';

const primitive = true;
const mySymbol = Symbol('mySymbol');
const symObj = Object(mySymbol);
const object = {};
const fn = function fn() {};

assertIsFunction(primitive); // TypeError 'true is not a function'.
assertIsFunction(object); // TypeError '#<Object> is not a function'.
assertIsFunction(mySymbol); // TypeError 'Symbol(mySymbol) is not a function'.
assertIsFunction(symObj); // TypeError '#<Object> is not a function'.
console.log(assertIsFunction(fn)); // Returns fn.
```
