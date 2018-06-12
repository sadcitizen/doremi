# unionWith(...arrays, [comparator])

Unites the arrays.

## Usage

```js
import unionWith from 'doremi/array/union-with';

const a = ['a', 'b', 'c'];
const b = ['d', 'e', 'f'];

unionWith(a, b);
// => ['a', 'b', 'c', 'd', 'e', 'f']

const value = [{ name: 'Bill', age: 20 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }, { name: 'Donald', age: 27 }];
const other = [{ name: 'George', age: 21 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 24 }, { name: 'John', age: 29 }];

unionWith(value, other, (l, r) => l.name === r.name);
// => [{ name: 'Bill', age: 20 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }, { name: 'Donald', age: 27 }, { name: 'George', age: 21 }, { name: 'John', age: 29 }]
```
