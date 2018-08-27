# compose(...functions)

Create a new function that will compose and invoke functions from right to left,
passing the return values from each invocation to the next successive function.

## Usage

```js
import compose from 'doremi/func/compose';

const sum = (x, y) => x + y;
const square = x => x * x;
const squareOfSum = compose(square, sum);

squareOfSum(2, 3);
// => 25
```