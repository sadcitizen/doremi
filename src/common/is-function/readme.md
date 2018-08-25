# isFunction(value): Boolean

Checks if the given value is a function.

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
