# at(array, ...indexes)

Returns an array of elements corresponding to the given indexes.

## Usage

```js
import at from 'doremi/array/at';

at([1, 2, 3, 4, 5], 1);
// => 2

at([1, 2, 3, 4, 5], 1, 3);
// => [2, 4]

at([1, 2, 3, 4, 5], [-1, -2, 0]);
// => [5, 4, 1]
```