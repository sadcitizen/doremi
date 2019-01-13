# findLastIndex(array, predicate, [context=null])

Returns the index of the last element in a given array that satisfies the provided testing function.
Otherwise, it returns -1, indicating no element passed the test.

## Usage

```js
import findLastIndex from 'doremi/array/find-last-index';
import isBoolean from 'doremi/common/is-boolean';
import isNumber from 'doremi/common/is-number';

const array = [false, 0, 1, true, 'hi'];

findLastIndex(array, isBoolean);
// => 3

findLastIndex(array, isNumber);
// => 2

findLastIndex(array, x => x === 4);
// => -1
```
