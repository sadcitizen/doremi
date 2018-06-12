# intersectionWith(array, other, [comparator])

Returns the common items of the arrays.

## Usage

```js
import intersectionWith from 'doremi/array/intersection-with';

const value = [{ name: 'Bill', age: 20 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }, { name: 'Donald', age: 27 }];
const other = [{ name: 'George', age: 21 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 24 }, { name: 'John', age: 29 }];

intersectionWith(value, other, (l, r) => l.name === r.name);
// => [{ name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }]
```
