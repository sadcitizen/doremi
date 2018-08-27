# flip(fn)

Returns a new function which accepts arguments in the reverse order that the original function specifies.

## Usage

```js
import flip from 'doremi/func/flip';

const divide = (x, y) => x / y;
const flippedDivide = flip(divide);

divide(100, 10);
// => 10

flippedDivide(100, 10);
// => 0.1
```
