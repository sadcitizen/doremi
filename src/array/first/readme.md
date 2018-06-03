# first(array, count)

Returns an array with first element of an array. Passing `count` will return the first `count` elements of the array.

## Usage

```js
import at from 'doremi/array/first';

console.log(first([1, 2, 3, 4, 5]));
// => [1]

console.log(first([1, 2, 3, 4, 5], 3));
// => [1, 2, 3]

console.log(first([1, 2, 3, 4, 5], 99));
// => [1, 2, 3, 4, 5]
```
