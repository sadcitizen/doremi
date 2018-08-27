# append(array, ...items)

Appends items of an array to the end of other.

## Usage

```js
import append from 'doremi/array/append';

const foo = [3, 6, 9, 12];
const bar = [4, 7, 10, 13];

append(foo, bar);

console.log(foo);
// => [3, 6, 9, 12, 4, 7, 10, 13]
```
