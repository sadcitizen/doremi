# partitionBy(array, [predicate], [ctx]): Array

Returns an array of two arrays. The first array is items that return true for the predicate function.
The second array is items that return false for the predicate function.

## Usage

```js
import partitionBy from 'doremi/array/partition-by';
import isEven from 'doremi/number/is-even';

partitionBy([1, 2, 3, 4, 5], isEven);
// => [[2, 4], [1, 3, 5]]

partitionBy([null, false, undefined], Boolean);
// => [[], [null, false, undefined]]
```
