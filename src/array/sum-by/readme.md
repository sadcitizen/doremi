# sumBy(array, [iteratee])

Sums all values in the array.

## Usage

```js
import sumBy from 'doremi/array/sum-by';

sumBy([1, 2, 3]);
// => 6

sumBy(['lorem', 'ipsum', 'sit'], x => x.length);
// => 13
```
