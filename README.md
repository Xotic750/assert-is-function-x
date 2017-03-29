<a name="module_assert-is-function-x"></a>

## assert-is-function-x
<a href="https://travis-ci.org/Xotic750/assert-is-function-x"
title="Travis status">
<img
src="https://travis-ci.org/Xotic750/assert-is-function-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/assert-is-function-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/assert-is-function-x.svg"
alt="Dependency status" height="18"/>
</a>
<a
href="https://david-dm.org/Xotic750/assert-is-function-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/assert-is-function-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/assert-is-function-x" title="npm version">
<img src="https://badge.fury.io/js/assert-is-function-x.svg"
alt="npm version" height="18">
</a>

If isFunction(callbackfn) is false, throw a TypeError exception.

**Version**: 1.2.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_assert-is-function-x--module.exports"></a>

### `module.exports(callback)` ⇒ <code>\*</code> ⏏
Tests `callback` to see if it is a function, throws a `TypeError` if it is
not. Otherwise returns the `callback`.

**Kind**: Exported function  
**Returns**: <code>\*</code> - Returns `callback` if it is function.  
**Throws**:

- <code>TypeError</code> Throws if `callback` is not a function.


| Param | Type | Description |
| --- | --- | --- |
| callback | <code>\*</code> | The argument to be tested. |

**Example**  
```js
var assertIsFunction = require('assert-is-function-x');
var primitive = true;
var mySymbol = Symbol('mySymbol');
var symObj = Object(mySymbol);
var object = {};
function fn () {}

assertIsFunction(primitive);
   // TypeError 'true is not a function'.
assertIsFunction(object);
   // TypeError '#<Object> is not a function'.
assertIsFunction(mySymbol);
   // TypeError 'Symbol(mySymbol) is not a function'.
assertIsFunction(symObj);
   // TypeError '#<Object> is not a function'.
assertIsFunction(fn);
   // Returns fn.
```
