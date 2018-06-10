# uniqueBy(array, [iteratee])

Removes duplicates and returns distinct elements from an array.

# Usage

```js
import uniqueBy from 'doremi/array/unique-by';

uniqueBy([1, 2, 1, 3, 1, 4]);
// => [1, 2, 3, 4]

uniqueBy([{ name: 'Casper' }, { name: 'Richard' }, { name: 'Casper' }], i => i.name);
// => [{ name: 'Casper' }, { name: 'Richard' }]
```

