# repeat(fn, count, [ctx])

Invokes the given `fn` function `count` times. Each invocation of `fn` is called with an index argument.

## Usage

```js
import repeat from 'doremi/func/repeat';

const array = [];

repeat(index => {
    array.push(index);
}, 5);

console.log(array);
// => [0, 1, 2, 3, 4]
```
