# flatten(target, deep)

Flattens a nested array. If `deep` is true the array is recursively flattened, otherwise it is only flattened a single level.

## Usage

```js
import at from 'doremi/array/flatten';

console.log(flatten([1, [2], [3, [[4]]]]));
// => [1, 2, 3, 4]

console.log(flatten([1, [2], [3, [[4]]]], false));
// => [1, 2, 3, [[4]]]
```
