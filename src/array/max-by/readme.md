# maxBy(array, [iteratee])

Returns the element in the array with the greatest value.

## Usage

```js
import maxBy from 'doremi/array/max-by';

maxBy([1, 2, 4, 3, 9, 0]);
// => 9

maxBy([{ value: 1 }, { value: 2 }, { value: 3 }], x => x.value);
// => { value: 3 }
```
