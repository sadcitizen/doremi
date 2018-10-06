# first(array, length): Array

Returns an array with first element of an array. Passing `length` will return the first `length` elements of the array.

## Usage

```js
import at from 'doremi/array/first';

first([1, 2, 3, 4, 5]);
// => [1]

first([1, 2, 3, 4, 5], 3);
// => [1, 2, 3]

first([1, 2, 3, 4, 5], 99);
// => [1, 2, 3, 4, 5]
```
