# isFunction(fn)

Checks if a value is function.

## Usage

```js
import isFunction from 'doremi/func/is-function';

isFunction(null);
// => false

function noop() {}
isFunction(noop);
// => true

isFunction(Math.abs);
// => true
```
