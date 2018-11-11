# before(fn, times): Function

Creates a new function that invokes `fn` while it's called less than `times` and store the result of last call.

## Usage

```js
import before from 'doremi/func/before';

const add = before((x, y) => x + y, 3);
add(1, 1);
// => 2

add(2, 3);
// => 5

add(3, 7);
// => 5 - stored result
```
