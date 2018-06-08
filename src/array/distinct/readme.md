# distinct(array, [iteratee])

Removes duplicates and returns distinct elements from an array.

# Usage

```js
import distinct from 'doremi/array/distinct';

distinct([1, 2, 1, 3, 1, 4]);
// => [1, 2, 3, 4]

distinct([{ name: 'Casper' }, { name: 'Richard' }, { name: 'Casper' }], i => i.name);
// => [{ name: 'Casper' }, { name: 'Richard' }]
```

