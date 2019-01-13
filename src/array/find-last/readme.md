# findLast(array, predicate, [context=null])

Returns the last element in a given array that satisfies the provided testing function.
Otherwise, it returns `null`, indicating no element passed the test.

## Usage

```js
import findLast from 'doremi/array/find-last';
import isBoolean from 'doremi/common/is-boolean';
import isNumber from 'doremi/common/is-number';

const array = [false, 0, 1, true, 'hi'];

findLast(array, isBoolean);
// => true

findLast(array, isNumber);
// => 1

findLast(array, x => x === 4);
// => null
```
