# memoize(fn, resolver): Function

Creates a new function that caches invocations of `fn`. The default `resolver` is `JSON.stringify`.

## Usage

```js
import memoize from 'doremi/func/memoize';

const sum = (x, y) => x + y;
const memoizedSum = memoize(sum);

memoizedSum(2, 2);
// => 4

memoizedSum(2, 2);
// => 4, without invocation of `sum`
```
