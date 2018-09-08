# last(array, count)

Returns an array with last element of an array. Passing `count` will return the last `count` elements of the array.

## Usage

```js
import at from 'doremi/array/last';

first([1, 2, 3, 4, 5]);
// => [5]

last([1, 2, 3, 4, 5], 3);
// => [3, 4, 5]

last([1, 2, 3, 4, 5], 99);
// => [1, 2, 3, 4, 5]
```