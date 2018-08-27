# append(array, ...items)

Appends items of an array to the end of other.

## Usage

```js
import append from 'doremi/array/append/immutable';

const foo = [3, 6, 9, 12];
const bar = [4, 7, 10, 13];

const baz = append(foo, bar);

console.log(baz);
// => [3, 6, 9, 12, 4, 7, 10, 13]

console.log(foo);
// => [3, 6, 9, 12]

console.log(bar);
// => [4, 7, 10, 13]
```
