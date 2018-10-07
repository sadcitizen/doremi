# includesWith(array, predicate, [fromIndex]): Boolean

Checks if the given array includes elements for which `predicate` returns `true`.

## Usage

```js
import includesWith from 'doremi/array/includes-with';

const array = [0, 1, 2, 3, 4];

includesWith(array, x => x === 2);
// => true

includesWith(array, x => x > 5);
// => false

includesWith(array, x => x === 2, 3);
// => false
```
