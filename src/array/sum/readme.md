# sum(array, [iteratee])

Sums all values in the array.

## Usage

```js
import sum from 'doremi/array/sum';

sum([1, 2, 3]);
// => 6

sum(['lorem', 'ipsum', 'sit'], x => x.length);
// => 13
```
