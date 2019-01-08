# flatten(array, [isDeep=true])

Flattens a nested array. If `deep` is true the array is recursively flattened, otherwise it is only flattened a single level.

## Usage

```js
import flatten from 'doremi/array/flatten';

flatten([1, [2, [3, [4, [5, [6, [7]]]]]]]);
// => [1, 2, 3, 4, 5, 6, 7]

flatten([1, [2], [3, [[4]]]], false);
// => [1, 2, [3, [4, [5, [6, [7]]]]]]
```
