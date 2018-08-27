# averageBy(array, [iteratee])

Returns the average of all items of an array.

## Usage

```js
import average from 'doremi/array/average';

average([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// => 4.5

average(['lorem', 'ipsum', 'sit', 'dolor', 'amet'], x => x.length);
// => 4.4
```
