# chunk(array, size)


## Usage

```js
import chunk from 'doremi/array/chunk';

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

chunk(arr, 2);
// => [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]

chunk(arr, 3);
// => [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]

chunk(arr, 4);
// => [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9]]
```

