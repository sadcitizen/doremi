# chunk(array, size): Array

Splits the given array into smaller arrays of a specified size.

## Usage

```js
import chunk from 'doremi/array/chunk';

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

chunk(array, 2);
// => [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]

chunk(array, 3);
// => [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]

chunk(array, 4);
// => [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9]]
```

