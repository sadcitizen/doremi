# once(fn)

Returns a new function that invokes once and store the result of last call.

## Usage

```js
import once from 'doremi/func/once';

const add = (x, y) => x +y;
const addOnce = once(add);

addOnce(1, 2);
// => 3

addOnce(3, 4);
// => 3

addOnce(5, 6);
// => 3
```
