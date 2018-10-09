# differenceWith(array, other, [comparator])

Creates new array of elements of the first array that are not present in the second array.

## Usage

```js
import differenceWith from 'doremi/array/difference-with';

const value = [{ name: 'Bill', age: 20 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 25 }, { name: 'Donald', age: 27 }];
const other = [{ name: 'George', age: 21 }, { name: 'Hillary', age: 30 }, { name: 'Barak', age: 24 }, { name: 'John', age: 29 }];

differenceWith(value, other, (l, r) => l.name === r.name);
// => [{ name: 'Bill', age: 20 }, { name: 'Donald', age: 27 }]
```
