# isEmpty(array): Boolean

Checks if the given array is 'null', `undefined` or zero length.

## Usage

```js
import isEmpty from 'doremi/array/is-empty';

isEmpty();
// => true

isEmpty(null);
// => true

isEmpty(undefined);
// => true

isEmpty([]);
// => true

isEmpty([0, 1, 2, 3, 4]);
// => false
```
