# flattenWithDepth(array, [depth=1])

## Usage

```js
import flattenWithDepth from 'doremi/array/flatten-with-depth';

flattenWithDepth([1, [2, [3, [4, [5, [6, [7]]]]]]]);
// => [1, 2, [3, [4, [5, [6, [7]]]]]]

flattenWithDepth([1, [2, [3, [4, [5, [6, [7]]]]]]], 3);
// => [1, 2, 3, 4, [5, [6, [7]]]]

```
