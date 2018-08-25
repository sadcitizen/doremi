# isObject(value): Boolean

Checks if the given value is an object.

## Usage

```js
import isObject from 'doremi/common/is-object';

isObject('');
// => false

isObject({ a: 'b', c: 'd' });
// => true

isObject({});
// => true
```
