# last(array, length): Array

Returns new array with last element of the given array. Passing `length` will return the last `length` elements of the array.

## Usage

```js
import last from 'doremi/array/last';

last([1, 2, 3, 4, 5]);
// => [5]

last([1, 2, 3, 4, 5], 3);
// => [3, 4, 5]

last([1, 2, 3, 4, 5], 99);
// => [1, 2, 3, 4, 5]
```
