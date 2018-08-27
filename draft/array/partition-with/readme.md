# partitionWith(target, [predicate], [ctx])

Returns an array of two arrays. The first array is items that return true for the predicate function.
The second array is items that return false for the predicate function.

## Usage

```js
import append from 'doremi/array/partition';
import isEven from 'doremi/number/is-even';
import partitionWith from 'doremi/array/partition-with';

partitionWith([1, 2, 3, 4, 5], isEven);
// => [[2, 4], [1, 3, 5]]

partitionWith([null, false, undefined], Boolean);
// => [[], [null, false, undefined]]
```
