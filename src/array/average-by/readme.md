# averageBy(array, [iteratee])

Calculates average of all values in the array produced by `iteratee` applied to each element in the array.

## Usage

```js
import averageBy from 'doremi/array/average-by';

averageBy([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// => 4.5

averageBy(['lorem', 'ipsum', 'sit', 'dolor', 'amet'], x => x.length);
// => 4.4
```
