# pipe(...fns)

Create a new function that will compose and invoke functions from left to right,
passing the return values from each invocation to the next successive function.

## Usage

```js
import pipe from 'doremi/func/pipe';

function sum(x, y) {
    return x + y;
}

function square(x) {
    return x * x;
}

const squareOfSum = pipe(sum, square);

squareOfSum(2, 3);
// => 25
```

