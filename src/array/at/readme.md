# at(array, ...indexes)

Returns an array of elements corresponding to the given indexes.

## Usage

```js
import at from 'doremi/array/at';

const item = at([1, 2, 3, 4, 5], 1);

console.log(item);
// => [2]

const pair = at([1, 2, 3, 4, 5], 1, 3);

console.log(pair);
// => [2, 4]

const trio = at([1, 2, 3, 4, 5], [-1, -2, 0]);

console.log(trio);
// => [5, 4, 1]
```
