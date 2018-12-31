# hasValue(array): Boolean

Checks if the given value is non empty array.

## Usage

```js
import hasValue from 'doremi/array/has-value';

hasValue([1, 2, 3, 4, 5]);
// => true

hasValue([]);
// => false

hasValue(undefined);
// => false

hasValue(null);
// => false
```
